const merge = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [];
  let prev = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    let interval = intervals[i];
    if (interval[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], interval[1]);
    } else {
      merged.push(prev);
      prev = interval;
    }
  }

  merged.push(prev);
  return merged;
};

const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

console.log(merge(intervals));
