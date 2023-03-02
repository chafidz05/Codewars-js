function pigIt(string) {
  return string
    .split(' ')
    .map(
      word =>
        `${word
          .split('')
          .splice(1)
          .join('')}${word.charAt(0)}ay`
    )
    .join(' ')
}