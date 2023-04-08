const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

function mix(s1, s2) {
  return alphabet
    .map(char => {
      const s1Count = s1.split("").filter(x => x === char).length,
        s2Count = s2.split("").filter(x => x === char).length,
        maxCount = Math.max(s1Count, s2Count);

      return {
        char: char,
        count: maxCount,
        src: maxCount > s1Count ? "2" : maxCount > s2Count ? "1" : "="
      };
    })
    .filter(c => c.count > 1)
    .sort(
      (objA, objB) =>
        objB.count - objA.count ||
        (objA.src + objA.char > objB.src + objB.char ? 1 : -1)
    )
    .map(c => `${c.src}:${c.char.repeat(c.count)}`)
    .join("/");
}