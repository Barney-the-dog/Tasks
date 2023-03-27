// Дан массив с числами. Узнайте сколько элементов с начала массива 
// надо сложить, чтобы в сумме получилось больше 10-ти.

function addArr(){
    let arr = [1, 4, 5, 8, 92]
    let sum = 0;
    let newArr = []
    for (let i=0; i<arr.length; i++) {
      sum=sum+arr[i]
      if (sum <= 10) {
        newArr.push(arr[i])
        }
    }  
     return newArr.length+1
     } 
   console.log(addArr())