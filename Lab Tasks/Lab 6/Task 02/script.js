let arr = [];
let pairs = [];
let range = prompt("Enter the length of the array: ");
for(let i =0;i<range;i++){
    arr[i] = parseInt(prompt("Enter the " + i + "th value of the Array: "));
}
let targetVal = prompt("Enter the Target Value: ");
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == targetVal) {
        pairs.push(arr[i]);
        pairs.push(arr[j]);
      }
    }
  }
alert("The pairs forming the Target Number are : " + pairs);