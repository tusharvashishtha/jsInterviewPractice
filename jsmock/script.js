// const arr = [1, 2 , 3, 4, 5, 6, 6];
// function maxProduct(arr){
//     let max = Math.max(...arr);
//     let index = arr.indexOf(max);
//     let newArr = [...arr];
//     newArr.splice(index , 1);
//     let secondMax = Math.max(...newArr);

//     return max * secondMax;
// }
// console.log(maxProduct(arr));

// const obj1 = {
//     name : "tushar",
//     age : 21
// }
// const obj2 = {
//     name : "naman",
//     age : 25
// }

// const merged = {obj1 , obj2};
// console.log(merged)

// let abc = "tushar";  
// abc[2] = "r";
// console.log(abc)

// let a = 100;
// let z = a++;
// console.log(a + z);

// let a = "My name is tushar";
// let s = ""
// for(let i = a.length - 1; i>=0; i--){
//     s += a.charAt(i);
// }
// s = s.split(" ").reverse()
// console.log(s)

// let str = "tushar vashishtha";
// let map = new Map();
// for(let i = 0; i<str.length; i++){
//     let ch = str[i];
//     if(map.has(ch)){
//         map.set(ch , map.get(ch) + 1);
//     }else{
//         map.set(ch , 1);
//     }
// }
// console.log(map);

// const arr = [1 , "a", 2, "b", 3, "c"];
// const arr1 = [];
// const arr2 = [];
// for(let i = 0; i<arr.length; i++){
//     if(typeof(arr[i]) === "number"){
//         arr1.push(arr[i]);
//     }else{
//         arr2.push(arr[i]);
//     }
// }
// console.log(arr1)
// console.log(arr2)

// const arr1 = [1, 2 , 3, 4, 5, 6];
// const arr2 = [3, 4 , 6, 9, 10, 2];
// const arr3 = [...arr1, ...arr2];

// arr3.sort((a , b) => a - b);
// for(let i = 0; i<arr3.length-1; i++){
//     if(arr3[i] === arr3[i + 1]){
//         console.log(arr3[i]);
//     }
// }

let arr = [1 , 2, 3, 4];
let result = arr.reduce((product , i) => {
   return product*i;
},arr[0]);
console.log(result)