function datingRange(age){
  return age>=14?`${Math.floor(age/2+7)}-${Math.floor((age-7)*2)}`:`${Math.floor(age-(age*0.1))}-${Math.floor(age+(age*0.1))}`
}