function longest(s1, s2) {
  const a = s1.split('');
  const b = s2.split('');

  return [...new Set([...a, ...b])].sort().join('');
}