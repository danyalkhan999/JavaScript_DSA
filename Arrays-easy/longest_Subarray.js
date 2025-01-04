// Concept: Longest Subarray with given Sum K(Positives)
const arr = [-1, 5, 1, 1, 1, 2, 3, 8, 9];

// Approach: Hashing

const largestSumSubarray = (arr, k) => {
  let map = new Map(); // <sum, index>
  let sum = 0; // will store sum of subarrays
  let maxLen = 0; // maximum length of subarray initially 0
  arr.forEach((el, index) => {
    sum += el;
    if (sum === k) maxLen = Math.max(maxLen, index + 1);

    let rem = sum - k;

    if (map.has(rem)) maxLen = Math.max(maxLen, index - map.get(rem));

    if (!map.has(rem)) map.set(sum, index);
  });

  return maxLen;
};

// Approach:  Two Pointer

const longestSumSubarray = (arr, k) => {
  let n = arr.length;
  let i = (j = 0); // two pointers

  let sum = arr[0];
  let maxLen = 0;

  while (j < n) {
    // if sum > k, reduce the subarray from left
    // until sum becomes less or equal to k
    while (i < j && sum > k) {
      sum -= arr[i];
      i++;
    }

    // if sum === k, update maxLen
    if (sum === k) maxLen = Math.max(maxLen, j - i + 1);

    j++;
    if (j < n) sum += arr[j];
  }

  return maxLen;
};

console.log(longestSumSubarray(arr, 3));
