// * Given an integer array nums, find the subarray with the largest       sum, and return its sum.

// ! Example 1:

// ! Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// ! Output: 6
// ! Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// ? Kadane's Algorithm:

// ? take two variables sum =0; maximum = MIN_VALUE;
// ? Iterate over the array
// ?    sum curr item to sum
// ?    if (sum > maximum) maximum = sum;
// ?    if(sum < 0) sum =0;
// ? return maximum;

const maxSumSubarray = (arr) => {
  let sum = 0;
  let MAX = -9999999;
  let start = -1;
  let ansEnd = -1;

  for (let i = 0; i < arr.length; i++) {
    if (sum <= 0) {
      start = i;
      sum = 0;
    }
    sum += arr[i];
    if (sum > MAX) {
      MAX = sum;
      // ansStart = start;
      ansEnd = i;
    }
    // if (sum < 0) sum = 0;
  }
  return { res: MAX, indices: [start, ansEnd] };
};

const kadaneAlgo = (arr) => {
  let sum = 0;
  let max = -99999;

  arr.forEach((el) => {
    sum += el;

    if (sum > max) max = sum;

    if (sum < 0) sum = 0;
  });

  return max;
};

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(maxSumSubarray(arr));
console.log(kadaneAlgo(arr));
