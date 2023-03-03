class Thing {
  constructor(name) {
    this.name = name;
    this.__lookupGetter__ = (n) => this[n];
    this.is_a = new Proxy(this, {
      get: (target, name) => {
        if(typeof n === 'symbol') {
          return target[n];
        }
        const propName = `is_a_${name}`;
        Reflect.defineProperty(target, propName, { value: true });
        return target[propName];
      }
    });
    this.is_not_a = new Proxy(this, {
      get: (target, name) => {
        const propName = `is_a_${name}`;
        Reflect.defineProperty(target, propName, { value: false });
        return target[propName];
      }
    });
    this.and_the = this.being_the = this.is_the = new Proxy(this, {
      get: (target, name) => {
        return new Proxy(target, {
          get: (t, tempProxName) => {
            Reflect.defineProperty(t, name, { value: tempProxName });
            return target;
          }
        });;
      }
    });
    this.having = this.has = (n) => new Proxy(this, {
      get: (target, name) => {
        let result;
        if(n > 1) {
          const singularName = name.substring(0, name.length - 1);
          result = new Array(n).fill(singularName).map(n => new Thing(n));
          result.each = (callback) => {
            let stringFunc = callback.toString();
            const arrowIndex = stringFunc.indexOf('=>');
            const leProp = stringFunc.substring(0, arrowIndex - 1);
            stringFunc = `${leProp} => ${leProp}.${stringFunc.substring(arrowIndex + 3)}`;
            const evalFunction = eval(stringFunc);

            result.forEach(evalFunction);
          }
        } else {
          result = new Thing(name);
        }
        Reflect.defineProperty(target, name, { value: result });
        return target[name];
      }
    });
    this.can = new Proxy(this, {
      get: (target, name) => {
        const tempFuncCreator = (first, second) => {
          let callback = second ? second : first;
          let cacheProp = second ? first : null;
          let stringFunc = callback.toString();
          let finalFunc = stringFunc;
          let interpolationRegex = /\${(\w+)}/g;
          let leMatch;
          while(leMatch = interpolationRegex.exec(stringFunc)) {
            const value = target[leMatch[1]];
            if(value) {
              finalFunc = finalFunc.replace(leMatch[0], value);
            }
          }
          finalFunc = eval(finalFunc);
          if(cacheProp) {
            finalFunc = new Proxy(finalFunc, {
              apply: (evalFunction, thisArg, argumentsList) => {
                const history = target[cacheProp] ? target[cacheProp] : new Array();
                history.push(evalFunction.apply(thisArg, argumentsList))
                Reflect.defineProperty(target, cacheProp, { value: history });
                return target;
              }
            });
          }
          Reflect.defineProperty(target, name, { value: finalFunc });
        };
        return tempFuncCreator;
      }
    });
  }
}

const jane = new Thing('Jane');
var klk = jane.toString();
console.log(klk);

module.exports = Thing;