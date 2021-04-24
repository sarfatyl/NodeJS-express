/**
time complexity : O(n)
space complexity : O(n)
**/

let array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(findSubArray(array))
function findSubArray(arr) {
    let table = [];
    let maxAns = arr[0];
    table[0] = arr[0];
    for(let i = 1; i <arr.length; i++){
        table[i] = Math.max(table[i-1] + arr[i], arr[i]);
        maxAns = Math.max(maxAns, table[i])
    }
    return maxAns;
}