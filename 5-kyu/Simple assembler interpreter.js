function simple_assembler(program) {
	const reg = {};
  const regOrValue = (n) => n.match(/[a-z]/) ? reg[n] : +n;
  const ops = {
    'mov': (a, b) => { reg[a] = regOrValue(b); return 1; },
    'inc': (a, b) => { reg[a]++; return 1; },
    'dec': (a, b) => { reg[a]--; return 1; },
    'jnz': (a, b) => { return regOrValue(a) != 0 ? +b : 1; }
  };
  let ip = 0;
  while(ip < program.length) {
    const [op, a, b] = program[ip].split(' ');
    ip += ops[op](a, b);
  }
	return reg;
}