// Напишите функцию, которая убирает повторяющиеся значения.
// Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]

let arr = [1, 2, 3, 1, 2];
arr1 = arr.filter(function(item, pos) {
    return arr.indexOf(item) == pos;
})
console.log(arr1);

