function rgb(r, g, b) {
  function decToHex(c) {
    if(c > 255) return "FF";
    else if(c < 0) return "00";
    else
      return c.toString(16).padStart(2, "0").toUpperCase();
  }
  return decToHex(r) + decToHex(g) + decToHex(b);
}