function highAndLow(numbers) {
  const orderedNumbers = numbers.split(' ').map(string => Number(string));
  return `${Math.max(...orderedNumbers)} ${Math.min(...orderedNumbers)}`;
}