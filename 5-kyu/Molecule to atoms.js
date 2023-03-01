function parseMolecule(formula) {
  const nums = {};
  (function reduce(molecule, mult) {
    molecule.match(/[A-Z][a-z]?\d*|\([^\)]+\)\d*|\[[^\]]+\]\d*|{[^}]+}\d*/g).forEach(function(val) {
      if(val.match(/\[|\]|\(|\)|{|}/g)) {
        reduce(val.replace(/^(\[|\()|((\]|\)|{|})\d*)$/g, ''), mult * val.match(/\d*$/g)[0]||1);
      } else {
        const element = val.replace(/\d/g, '');
        nums[element] = (nums[element] || 0) + (val.replace(/[A-Za-z]/g, '') || 1) * mult;
      }
    });
  }(formula, 1));
  return nums;
}