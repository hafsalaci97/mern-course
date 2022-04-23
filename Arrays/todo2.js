//Reverse
// let arr = [1,2,3,4,5];
// function reverse (A){
//     for (let i=0; i<Math.floor((A.length)/2); i++){
//         [A[i], A[A.length-1-i]] = [A[A.length-1-i], A[i]]
//     }
//     return A;
// }

// console.log(reverse(arr));

//Rotate 
// function rotate (arr, pos){
//     let j = arr.length-1;
//     for (let i=0; i< pos; i++){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j--;
// }
// return arr;
// }
// console.log(rotate([1,2,3,4,5], 1));
//Filter Range
// let arr = [1,2,5,12,14,19,13,4];
// let arr1 = [];

// for (let i=0; i<arr.length; i++){
//     if (arr[i]>=5 && arr[i]<=20){
//         arr1[arr1.length] = arr[i];
//     }
// }
// arr = arr1;
// console.log(arr);

//Concat
// let arr1 = [1,2,3];
// let arr2 = [4,5,6,7];
// let arr3=[];

// function concat (arr1, arr2, arr3){
//     for (let i=0;i<arr1.length;i++){
//         arr3[i] = arr1[i];
//     }
//     for (let j=0;j<arr2.length;j++){
//         arr3[arr3.length] = arr2[j];
//     }
//     return arr3;
// }
// console.log(concat(arr1,arr2, arr3));