function sumFibs(num) {
let sec = [0,1];
let sumImpar =  0
for (let i = 2; i <= num; i++) {
  while ((sec[i - 2] + sec[i -1]) <= num ) {
  sec[i] = sec[i - 2] + sec[i - 1];
  break
  }
  
} 
  for (let i = 0; i < sec.length; i++) {

    if (sec[i] % 2 != 0) { sumImpar = sumImpar + sec[i]}
  } 

  return sumImpar;
}

sumFibs(4);