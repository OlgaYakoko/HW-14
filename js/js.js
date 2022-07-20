for(i = 1; i <= 100; i++) {
    console.log(i)
}

for(i = 100; i >= 1; i--){
    console.log(i)
}
for (i = 1; i <= 100; i++) {
   if(i % 2 === 0) {
      console.log(i)
   }
}
arr = [1, 2, 3, 4, 5];
let sum = null;
for(i = 0; i < arr.length; i++){
   sum += arr[i];
}
console.log(sum)

arr2 = [1, 2, 3, 4, 5];
let sum2 = null;
for(i = 0; i < arr2.length; i++){
   sum2 = arr2[i] ** 2;
   sum2 += arr2[i]; 
}
 console.log(sum2)