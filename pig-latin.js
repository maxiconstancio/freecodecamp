function translatePigLatin(str) {
let expMach = /[^aeiou ]+/gi;
  let consonants = str.match(expMach)
  
  let strPig = ""
  if ((/^[^aeiou ]/).test(str) === true )  {
     strPig = str.slice(consonants[0].length).concat(consonants[0].concat("ay")) 
  } else {
    return str + "way"
  }
    return strPig;
  }

translatePigLatin("consonant");