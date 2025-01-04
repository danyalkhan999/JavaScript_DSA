const abc = [3, 0, 1];

// Better Approach: using hashing
const findMissingNumber = (abc) => {
  let n = abc.length;

  const hash = new Array(n + 1).fill(0); // hash array

  // storing the frequencies from 1 to n:
  for (let i = 0; i < n; i++) {
    hash[abc[i]]++;
  }

  // checking for hash frequency
  for (let i = 1; i <= n; i++) {
    if (hash[i] === 0) {
      return i;
    }
  }

  return -1;
};

// Optimal approach: mathematical formulas
const missingNumber = (arr) => {
  const N = arr.length;

  // find summation
  const sum = (N * (N + 1)) / 2;

  let sumArr = 0;

  for (let i = 0; i < arr.length; i++) {
    sumArr += arr[i];
  }

  const missingNum = sum - sumArr;

  return missingNum;
};

// console.log(findMissingNumber(abc));
console.log(missingNumber(abc));
