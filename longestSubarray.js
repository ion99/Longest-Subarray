function longestSubArray(arr) {
  arr.sort((a, b) => a - b);
  let arr1 = [];
  for (let i = 0; i < arr.length; i++){
    if(arr1.indexOf(arr[i]) === -1){
      arr1.push(arr[i]);
    }
  }
  let results = [];
  let j = 0;
  let count = 1;
  for (let i = 0; i<arr1.length; i++){
    while(arr1[i] + 1 === arr1[i+1]){
      count++;
      i++;
    }
    results[j] = count;
    count = 1;
    j++;
  }
  return Math.max(...results);
}
//longestSubArray([1, 1, 90, 90, 563, 585, 571, 90, 92, 94, 93, 91, 45]);