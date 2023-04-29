const createArgumentMap = (func, ...values) => {
  const funcStr = func.toString();
  const start = funcStr.indexOf('(') + 1;
  const end = funcStr.indexOf(')');
  const args = funcStr.slice(start, end).split(',');

  if(!values.length) return [];

  return args.reduce((obj, arg, ind) => {
    obj[arg] = values[ind];
    return obj;
  }, {});
};