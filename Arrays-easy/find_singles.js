// Find the number which has only single occurence in the array

const data = [1, 2, 1, 3, 4, 2, 6, 4, 3];

// Approach 1:

// Map:
// 1. We will create a map. eg. <value, count>
// 2. Iterate over the array and add all the nummbers into map.
// 3. Because map contain value and it's count, we can iterate over the array and find value with count 1

const approach1 = (arr) => {
  const N = arr.length;

  const map = new Map();

  arr.forEach((el) => {
    map.set(el, (map.get(el) || 0) + 1);
  });

  for (const [num, count] of map) {
    if (count == 1) return num;
  }

  return -1;
};

// Approach 2:

// XOR:
// XOR of two same element is equal to zero and XOR of 0 and value A is always A.
// Suppose we have number +5 and -5 both cancels each other and if we sum 10, 5 and -5 it's result 10 same works with XOR
// 1. Intialize a variable with zero;
// 2. Iterate ove the array do a XOR operation with array element and step 1 variable
// 3. After iterating the array the number you will get will be the single appeared element

const approach2 = (arr) => {
  let res = 0;
  arr.forEach((el) => {
    res = res ^ el;
  });
  return res;
};

console.log(approach2(data));
