// **Dutch national flag
//** [0,0,0,0,1,1,1,1,1,2,2,2,2,2,2]

// ** Problem Statement: Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// *? We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

//! You must solve this problem without using the library's sort function.

// *? Optimal Approach :
// ? 1. TAKE 3 varibales low =0, mid=0 and high=n-1,
// ? 2. loop over the array with while loop, while mid<=high
// ? 2. Check if arr[mid] === 0 , swap it with low and increment low and mid by 1.
// ? 3. Check if arr[mid] === 1,  just increment low by 1.
// ? 4. Check if arr[mid] === 2, swap it with high and increase mid by 1 and decrease high by 1

//! swap function
function swap(arr, i, j) {
  let t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

const dnfSort = (arr) => {
  let low = 0,
    mid = 0,
    high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      swap(arr, low++, mid++);
    } else if (arr[mid] === 2) {
      swap(arr, mid, high--);
    } else {
      mid++;
    }
  }
};

const arr = [1, 0, 2];

dnfSort(arr);

console.log(arr);
