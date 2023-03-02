function alphanumeric(string){
  return /[a-zA-Z0-9]/g.test(string) && !/[\s_!]/.test(string);
}