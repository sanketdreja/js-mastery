import { assertDeepEqual } from '../utils/assert.js';

/**
 * twoSumBrute
 * Time: O(n^2)
 * @param {number[]} nums
 * @param {number} target
 * @returns {[number, number] | null}
 */
export function twoSumBrute(nums, target) {
  if (!Array.isArray(nums)) throw new TypeError('twoSumBrute: nums must be an array');
  if (typeof target !== 'number' || Number.isNaN(target))
    throw new TypeError('twoSumBrute: target must be a number');

  for (let i = 0; i < nums.length; i++) {
    const a = nums[i];
    if (typeof a !== 'number' || Number.isNaN(a))
      throw new TypeError('twoSumBrute: nums must contain only numbers');

    for (let j = i + 1; j < nums.length; j++) {
      const b = nums[j];
      if (typeof b !== 'number' || Number.isNaN(b))
        throw new TypeError('twoSumBrute: nums must contain only numbers');

      if (a + b === target) return [i, j];
    }
  }

  return null;
}

/**
 * twoSumMap
 * Time: O(n)
 * @param {number[]} nums
 * @param {number} target
 * @returns {[number, number] | null}
 */
export function twoSumMap(nums, target) {
  if (!Array.isArray(nums)) throw new TypeError('twoSumMap: nums must be an array');
  if (typeof target !== 'number' || Number.isNaN(target))
    throw new TypeError('twoSumMap: target must be a number');

  const seen = new Map(); // value -> index

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (typeof n !== 'number' || Number.isNaN(n))
      throw new TypeError('twoSumMap: nums must contain only numbers');

    const need = target - n;
    if (seen.has(need)) return [seen.get(need), i];

    // store AFTER checking so we don't use same element twice
    seen.set(n, i);
  }

  return null;
}

/* tests */
assertDeepEqual(twoSumBrute([2, 7, 11, 15], 9), [0, 1], 'brute: basic');
assertDeepEqual(twoSumBrute([3, 2, 4], 6), [1, 2], 'brute: 2+4');
assertDeepEqual(twoSumBrute([3, 3], 6), [0, 1], 'brute: duplicates');
assertDeepEqual(twoSumBrute([1, 2, 3], 7), null, 'brute: none');

assertDeepEqual(twoSumMap([2, 7, 11, 15], 9), [0, 1], 'map: basic');
assertDeepEqual(twoSumMap([3, 2, 4], 6), [1, 2], 'map: 2+4');
assertDeepEqual(twoSumMap([3, 3], 6), [0, 1], 'map: duplicates');
assertDeepEqual(twoSumMap([1, 2, 3], 7), null, 'map: none');

console.log('17_twoSum tests passed ✅');
