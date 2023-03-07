function encrypt(text, n) {
  console.log(text, n);
  if(!text || n <= 0) return text;
  while(n--) {
    let ans = "";
    for(let i = 1; i < text.length; i += 2) {
      ans += text[i];
    }
    for(let i = 0; i < text.length; i += 2) {
      ans += text[i];
    }
    text = ans;
  }
  return text;
}

function decrypt(encryptedText, n) {
  if(!encryptedText || n <= 0) return encryptedText;
  const ans = new Array(encryptedText.length);
  while(n--) {
    let j = 0;
    for(let i = 1; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    for(let i = 0; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    encryptedText = ans.join("");
  }
  return encryptedText;
}