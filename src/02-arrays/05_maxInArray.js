import { assertEqual } from '../utils/assert.js';

/**
 * maxInArrayLoop - finds max using loop
 */
export function maxInArrayLoop(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('maxInArray: input must be an array');
  }
  if (arr.length === 0) {
    throw new Error('maxInArray: array must not be empty');
  }

  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }

  return max;
}

/**
 * maxInArrayReduce - finds max using reduce
 */
export function maxInArrayReduce(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('maxInArray: input must be an array');
  }
  if (arr.length === 0) {
    throw new Error('maxInArray: array must not be empty');
  }

  return arr.reduce((max, current) => {
    return current > max ? current : max;
  }, arr[0]);
}

/**
 * maxInArrayMethod - finds max using Math.max
 */
export function maxInArrayMethod(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('maxInArray: input must be an array');
  }
  if (arr.length === 0) {
    throw new Error('maxInArray: array must not be empty');
  }

  return Math.max(...arr);
}

/* tests */

assertEqual(maxInArrayLoop([1, 3, 2, 5, 4]), 5, 'loop: normal');
assertEqual(maxInArrayLoop([-10, -3, -20, -5]), -3, 'loop: negatives');
assertEqual(maxInArrayLoop([7]), 7, 'loop: single');

assertEqual(maxInArrayReduce([1, 3, 2, 5, 4]), 5, 'reduce: normal');
assertEqual(maxInArrayReduce([-10, -3, -20, -5]), -3, 'reduce: negatives');
assertEqual(maxInArrayReduce([7]), 7, 'reduce: single');

assertEqual(maxInArrayMethod([1, 3, 2, 5, 4]), 5, 'method: normal');
assertEqual(maxInArrayMethod([-10, -3, -20, -5]), -3, 'method: negatives');
assertEqual(maxInArrayMethod([7]), 7, 'method: single');

console.log('05_maxInArray tests passed ✅');
