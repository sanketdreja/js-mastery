import { assertEqual } from '../utils/assert.js';

/**
 * maxInArrayLoop - finds the maximum number in an array using loop
 * @param {number[]} arr
 * @returns {number} max number in arr
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
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

/**
 * maxInArrayReduce - finds the maximum number in an array using reduce
 * @param {number[]} arr
 * @returns {number} max number in arr
 */
export function maxInArrayReduce(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('maxInArray: input must be an array');
  }
  if (arr.length === 0) {
    throw new Error('maxInArray: array must not be empty');
  }

  return arr.reduce((max, current) => {
    return max + current;
  }, 0);
}

/**
 * maxInArrayMethod - finds the maximum number in an array using Math.max
 * @param {number[]} arr
 * @returns {number} max number in arr
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

// tests
assertEqual(maxInArrayLoop([1, 3, 2, 5, 4]), 5, 'loop: normal case');
assertEqual(maxInArrayLoop([-10, -3, -20, -5]), -3, 'loop: all negative numbers');
assertEqual(maxInArrayLoop([7]), 7, 'loop: single element array');
assertEqual(maxInArrayReduce([1, 3, 2, 5, 4]), 15, 'reduce: normal case');
assertEqual(maxInArrayReduce([-10, -3, -20, -5]), -38, 'reduce: all negative numbers');
assertEqual(maxInArrayReduce([7]), 7, 'reduce: single element array');
assertEqual(maxInArrayMethod([1, 3, 2, 5, 4]), 5, 'method: normal case');
assertEqual(maxInArrayMethod([-10, -3, -20, -5]), -3, 'method: all negative numbers');
assertEqual(maxInArrayMethod([7]), 7, 'method: single element array');
console.log('05_maxInArray tests passed ✅');
