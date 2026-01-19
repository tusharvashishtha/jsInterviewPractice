const arr = [1, 2 , 3, 4, 5, 6, 6];
function maxProduct(arr){
    let max = Math.max(...arr);
    let index = arr.indexOf(max);
    let newArr = [...arr];
    newArr.splice(index , 1);
    let secondMax = Math.max(...newArr);

    return max * secondMax;
}
console.log(maxProduct(arr));