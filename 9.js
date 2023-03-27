// Напишите функцию, которая разделяет массив на части заданного размера.
// Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]

function sliceArr(arr, num) {
    const res = [];
    for (let i = 0; i < arr.length; i += num) {
        const arr2 = arr.slice(i, i + num);
        res.push(arr2);
    }
    return res;
}
const arr = [1, 2, 3, 4, 5];
console.log(sliceIArr(arr, 2));