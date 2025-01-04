const nums = [0, 1, 0, 3, 12];

const swapElements = (nums, i, j) => {
  let k = nums[i];
  nums[i] = nums[j];
  nums[j] = k;
};

const moveZeroes = (nums) => {
  let j = -1;
  let n = nums.length;
  // step 1
  // first find the index of value 0
  for (let i = 0; i < n; i++) {
    if (nums[i] == 0) {
      j = i;
      break;
    }
  }

  if (j == -1) return;

  // step 2 : find the non zero element and swap with zero
  let i = j + 1;
  for (; i < n; i++) {
    if (nums[i] !== 0) {
      swapElements(nums, j, i);
      j += 1;
    }
  }
};

moveZeroes(nums);

console.log(nums);
