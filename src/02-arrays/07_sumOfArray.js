import { assertEqual } from '../utils/assert.js';

/**
 * sumOfArrayLoop - sums array using loop
 */
export function sumOfArrayLoop(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('sumOfArray: input must be an array');
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

/**
 * sumOfArrayReduce - sums array using reduce
 */
export function sumOfArrayReduce(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('sumOfArray: input must be an array');
  }

  return arr.reduce((sum, current) => sum + current, 0);
}

/**
 * sumOfArrayMethod - sums array using forEach
 */
export function sumOfArrayMethod(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('sumOfArray: input must be an array');
  }

  let sum = 0;
  arr.forEach((value) => {
    sum += value;
  });

  return sum;
}

/* tests */

assertEqual(sumOfArrayLoop([1, 2, 3]), 6, 'loop: basic');
assertEqual(sumOfArrayReduce([1, 2, 3]), 6, 'reduce: basic');
assertEqual(sumOfArrayMethod([1, 2, 3]), 6, 'forEach: basic');

assertEqual(sumOfArrayLoop([]), 0, 'loop: empty');
assertEqual(sumOfArrayReduce([]), 0, 'reduce: empty');
assertEqual(sumOfArrayMethod([]), 0, 'forEach: empty');

assertEqual(sumOfArrayLoop([-1, 5, -2]), 2, 'loop: negatives');
assertEqual(sumOfArrayReduce([-1, 5, -2]), 2, 'reduce: negatives');
assertEqual(sumOfArrayMethod([-1, 5, -2]), 2, 'forEach: negatives');

console.log('07_sumOfArray tests passed ✅');
