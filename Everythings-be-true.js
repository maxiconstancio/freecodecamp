function truthCheck(collection, pre) {
let trusty = collection.map (function (x) {
  
   if ( x[pre] != null && x[pre] != undefined && x[pre] != false && Number.isNaN(x[pre]) != true ) {
     return true;
   } else {
     return false;
   }
  })

 return ((trusty.includes(false) === true) ? false : true);
  
}
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");