// Union of two sorted arrays

const arr1 = [2, 3, 4, 4, 5, 11, 12];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const union = (arr1, arr2) => {
  let n = arr1.length;
  let m = arr2.length;

  // create result array
  let result = [];

  // initialize both i and j with 0
  let i = (j = 0);

  // loop over both the array until any 1 of the array complete
  while (i < n && j < m) {
    if (arr1[i] <= arr2[j]) {
      if (result.length === 0 || result[result.length - 1] !== arr1[i])
        result.push(arr1[i]);
      i++;
    } else {
      if (arr2[j] <= arr1[i]) {
        if (result.length === 0 || result[result.length - 1] !== arr2[j])
          result.push(arr2[j]);
        j++;
      }
    }
  }

  while (i < n) {
    if (result[result.length - 1] !== arr1[i]) result.push(arr1[i]);
    i++;
  }

  while (j < m) {
    if (result[result.length - 1] !== arr2[j]) result.push(arr2[j]);
    j++;
  }

  return result;
};

console.log(union(arr1, arr2));
