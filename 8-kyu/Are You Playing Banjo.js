function areYouPlayingBanjo(name) {
  if(/^[rR]/.test(name)) return `${name} plays banjo`;
  return `${name} does not play banjo`;
}