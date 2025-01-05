//* You are given an array prices where prices[i] is the price of a given stock on the ith day.
//* You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
//* Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

//? Image explanation of this Algorithm [res/stockbuysell.png]

const maximumProfit = (prices) => {
  let maxProfit = 0;
  let minPrice = Number.MAX_VALUE;

  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, arr[i]);
    maxProfit = Math.max(maxProfit, arr[i] - minPrice);
  }

  return maxProfit;
};

const arr = [7, 1, 4, 5, 6, 3, 7];

console.log(maximumProfit(arr));
