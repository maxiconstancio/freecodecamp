function dropElements(arr, func) {
  let limit = arr.length
  for (let i = 0; i < limit; i++) {
    if (func(arr[0]) === true) {
      return arr
    }
    arr.shift();

  }
    

  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });