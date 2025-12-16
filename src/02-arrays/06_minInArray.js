import { assertEqual } from '../utils/assert';
/**
 * minInArrayLoop - finds min using loop
 */

/**
 *
 * Finds the minimum value in an array using a loop.
 * @param {number[]} arr
 * @returns {number}  The minimum value in the array.
 *
 */
export function minInArrayLoop(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('minInArray: input must be an array');
  }
  if (arr.length === 0) {
    throw new Error('minInArray: array must not be empty');
  }
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }

  return min;
}

/**
 * finds min using reduce
 * @param {number[]} arr
 * @returns {number} The minimum value in the array.
 */
export function minInArrayReduce(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('minInArray: input must be an array');
  }
  if (arr.length === 0) {
    throw new Error('minInArray: array must not be empty');
  }

  return arr.reduce((min, current) => {
    return current < min ? current : min;
  }, arr[0]);
}

/**
 *  finds min using Math.min
 * @param {number[]} arr
 * @returns {number} The minimum value in the array.
 */
export function minInArrayMethod(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('minInArray: input must be an array');
  }
  if (arr.length === 0) {
    throw new Error('minInArray: array must not be empty');
  }
  return Math.min(...arr);
}

/* tests */

assertEqual(minInArrayLoop([3, 1, 4, 1, 5]), 1, 'loop: normal');
assertEqual(minInArrayLoop([-10, -3, -20, -5]), -20, 'loop: negatives');
assertEqual(minInArrayLoop([7]), 7, 'loop: single');
assertEqual(minInArrayReduce([3, 1, 4, 1, 5]), 1, 'reduce: normal');
assertEqual(minInArrayReduce([-10, -3, -20, -5]), -20, 'reduce: negatives');
assertEqual(minInArrayReduce([7]), 7, 'reduce: single');
assertEqual(minInArrayMethod([3, 1, 4, 1, 5]), 1, 'method: normal');
assertEqual(minInArrayMethod([-10, -3, -20, -5]), -20, 'method: negatives');
assertEqual(minInArrayMethod([7]), 7, 'method: single');

console.log(' 06_minInArray : All tests passed!');
