//  Напишите функцию, которая очищает массив от нежелательных значений, 
  //  таких как false, undefined, пустые строки, ноль, null.
  //  Ожидаемый результат: 
  //  [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]

  function filter(arr){
    return arr.filter(Boolean)
    }
  console.log(filter([0, 1, false, 2, undefined, '', 3, null]))