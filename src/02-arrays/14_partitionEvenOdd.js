import { assertDeepEqual } from '../utils/assert.js';

/**
 * partitionEvenOddLoop
 * @param {number[]} arr
 * @returns {{ even: number[], odd: number[] }}
 */
export function partitionEvenOddLoop(arr) {
  if (!Array.isArray(arr)) throw new TypeError('partitionEvenOddLoop: input must be an array');

  const result = { even: [], odd: [] };

  for (const num of arr) {
    if (typeof num !== 'number' || Number.isNaN(num)) {
      throw new TypeError('partitionEvenOddLoop: array must contain only numbers');
    }

    if (num % 2 === 0) result.even.push(num);
    else result.odd.push(num);
  }

  return result;
}

/**
 * partitionEvenOddReduce
 * @param {number[]} arr
 * @returns {{ even: number[], odd: number[] }}
 */
export function partitionEvenOddReduce(arr) {
  if (!Array.isArray(arr)) throw new TypeError('partitionEvenOddReduce: input must be an array');

  return arr.reduce(
    (acc, num) => {
      if (typeof num !== 'number' || Number.isNaN(num)) {
        throw new TypeError('partitionEvenOddReduce: array must contain only numbers');
      }

      if (num % 2 === 0) acc.even.push(num);
      else acc.odd.push(num);

      return acc;
    },
    { even: [], odd: [] }
  );
}

/* tests */
assertDeepEqual(
  partitionEvenOddLoop([1, 2, 3, 4, 5]),
  { even: [2, 4], odd: [1, 3, 5] },
  'loop: basic'
);
assertDeepEqual(partitionEvenOddLoop([]), { even: [], odd: [] }, 'loop: empty');
assertDeepEqual(partitionEvenOddLoop([0, -2, -3]), { even: [0, -2], odd: [-3] }, 'loop: negatives');

assertDeepEqual(
  partitionEvenOddReduce([1, 2, 3, 4, 5]),
  { even: [2, 4], odd: [1, 3, 5] },
  'reduce: basic'
);
assertDeepEqual(partitionEvenOddReduce([]), { even: [], odd: [] }, 'reduce: empty');
assertDeepEqual(
  partitionEvenOddReduce([0, -2, -3]),
  { even: [0, -2], odd: [-3] },
  'reduce: negatives'
);

console.log('14_partitionEvenOdd tests passed ✅');
