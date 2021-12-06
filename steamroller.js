//Flatten a nested array
function steamrollArray(arr) {
  const arrAnidado = []
function arrIn (findArr) {
  if (Array.isArray(findArr) === false) {
    //si no es array lo insertamos en el array final    
    arrAnidado.push(findArr)
    return findArr;
  } else { 
    //si es array lo recorremos y se llama nuevamente a la funcion con los elementos del array.
    for (let i= 0; i < findArr.length; i++) {
      arrIn(findArr[i]);
    }
  }
}
for (let j = 0; j < arr.length; j++) {
  //recorremos el array llamando a la funcion que aplana. 
  arrIn(arr[j]);
}
  return arrAnidado
}
steamrollArray([1, [2], [3, [[4]]]]);