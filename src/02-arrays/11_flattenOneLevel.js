import { assertDeepEqual } from '../utils/assert.js';

/**
 * Flatten array by one level only.
 * @param {any[]} arr
 * @returns {any[]}
 */
export function flattenOneLevelLoop(arr) {
  if (!Array.isArray(arr)) throw new TypeError('flattenOneLevelLoop: input must be an array');

  // TODO: loop and flatten one level
  const result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      for (const subItem of item) {
        result.push(subItem);
      }
    } else {
      result.push(item);
    }
  }
  return result;
}

/**
 * Flatten using modern method.
 */
export function flattenOneLevelModern(arr) {
  if (!Array.isArray(arr)) throw new TypeError('flattenOneLevelModern: input must be an array');

  // TODO: use flat(1) OR concat + spread
  // return arr.flat(1);
  return [].concat(...arr);
}

// tests
assertDeepEqual(flattenOneLevelLoop([1, [2, 3], 4]), [1, 2, 3, 4], 'loop: basic');
assertDeepEqual(flattenOneLevelLoop([1, [2, [3]], 4]), [1, 2, [3], 4], 'loop: one level only');

assertDeepEqual(flattenOneLevelModern([1, [2, 3], 4]), [1, 2, 3, 4], 'modern: basic');
assertDeepEqual(flattenOneLevelModern([1, [2, [3]], 4]), [1, 2, [3], 4], 'modern: one level only');

console.log('11_flattenOneLevel tests passed ✅');
