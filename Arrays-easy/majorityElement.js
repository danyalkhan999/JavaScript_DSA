//** Problem Statement: Given an array nums of size n, return the majority element.

// ?The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

//* Example 1:
//* Input: nums = [3,2,3]
//* Output: 3

//* Example 2:
//* Input: nums = [2,2,1,1,1,2,2]
//* Output: 2

// ? Moore's Voting Approach
// ? Take 2 variable Count and El <elment> and intialize both with zero
// ? Step 1 Find the element with maximum occurence
// ? Step 1.1 Iterate over the array for(i:0->n)
// ? Step 1.2 Check if(count == 0) : count = 1, el = arr[i]
// ?            else if(arr[i] == el) count++
// ?            else count--;
// ? Step 2 Verify the number of occurence of the maximum element
// ? Step 2.1 IntiIterate over the array for(i:0->n)
// ? Step 2.2 Check if (arr[i] == el) count1++
