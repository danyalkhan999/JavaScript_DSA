// ! Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// * A subarray is a contiguous non-empty sequence of elements within an array.

const subarraySum = (nums, k) => {
  let map = new Map();
  let totalCount = 0;
  let sum = 0;

  map.set(0, 1);

  for (const el of nums) {
    sum += el;

    if (map.has(sum - k)) totalCount += 1;

    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return totalCount;
};

const arr = [1, 1, 1];

console.log(subarraySum(arr, 2));
