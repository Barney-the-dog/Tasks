// Заполните массив следующим образом: в первый элемент запишите '1', 
// во второй '22', в третий '333' и так далее.

function addArr(n){
    let arr = []
    for (let i =1; i<n; i++) {
      let a = ''
      for (let j=0; j<i; j++) {
        a = a+i
      }
    arr.push(a)
   }
     return arr
   }
   console.log(addArr(5))