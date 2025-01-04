// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// [1,3,4,5,7,8,9,90,532,] , target: 10

// Approach hashing
// 1. Create a HashMap
// 2. Iterate over the array
// 3. Find target - currElement
// 4. If that present in hashmap you found a match else insert it in hashmap with value + 1
// 5. return currentIndex and value of data you found in hashmap

function twoSum(arr, target) {
  let map = new Map(); // <data, value>

  for (let index = 0; index < arr.length; index++) {
    let missEl = target - arr[index];

    if (map.has(missEl)) {
      console.log("yes", [map.get(missEl), index]);
      return [map.get(missEl), index];
    } else {
      map.set(arr[index], index);
    }
  }
  return [];
}

console.log(twoSum([1, 3, 4, 5, 7, 8, 9, 90, 532], 10));
