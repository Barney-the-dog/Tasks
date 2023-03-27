// Напишите функцию, которая преобразует глубокий массив в одномерный.
// Задачу нужно решить двумя способами!
// Ожидаемый результат: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]

function one(arr) {
    return arr.flat(Infinity)
  }
  console.log(one([1, 2, [3, 4, [5]]]))


  

  function one(arr) {
    return arr.join().split(',').map(el => Number(el))
  }
  console.log(one([1, 2, [3, 4, [5]]]))
