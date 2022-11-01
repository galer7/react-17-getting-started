function shuffleArr(arr: any[]) {
  return arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

export const randomSumIn = (nums: number[], max: number) => {
  let result = max + 1;
  while (result > max) {
    result = shuffleArr(nums)
      .slice(0, Math.ceil(Math.random() * nums.length))
      .reduce((x, acc) => x + acc, 0);
  }

  return result;
};

export const iterate = (nr: number) => {
  return Array.from({ length: nr }, (_, i) => i);
};

export const getRandomIntBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * max + min);
};

export const sum = (arr: number[]) => arr.reduce((n, acc) => n + acc, 0);
