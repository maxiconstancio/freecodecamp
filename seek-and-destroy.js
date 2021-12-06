function myReplace(str, before, after) {
  let arrStr = str.split(' ');
  let indWord = arrStr.findIndex(element => element === before);
  
  if (indWord != -1) {
    
    if (before.charAt(0).toUpperCase() != before.charAt(0)) {
      
      arrStr[indWord] = after.toLowerCase();
    } else {
      arrStr[indWord] = after.charAt(0).toUpperCase() + after.slice(1);
      
    }
  }
  return arrStr.join(' ');
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");