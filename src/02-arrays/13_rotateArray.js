import { assertDeepEqual } from '../utils/assert.js';

/**
 * Rotate array to the right by k steps (using extra space).
 * Time: O(n), Space: O(n)
 */
export function rotateArrayExtra(arr, k) {
  if (!Array.isArray(arr)) throw new TypeError('rotateArrayExtra: input must be an array');
  if (!Number.isInteger(k)) throw new TypeError('rotateArrayExtra: k must be integer');

  const n = arr.length;
  if (n === 0) return [];

  // TODO: handle k > n
  // TODO: build rotated array

  if (n === 0) return [];
  k = k % n;

  if (k === 0) return [...arr];
  return [...arr.slice(n - k), ...arr.slice(0, n - k)];
}

/**
 * Rotate array in-place using reverse trick.
 * Time: O(n), Space: O(1)
 */
export function rotateArrayInPlace(arr, k) {
  if (!Array.isArray(arr)) throw new TypeError('rotateArrayInPlace: input must be an array');
  if (!Number.isInteger(k)) throw new TypeError('rotateArrayInPlace: k must be integer');

  if (n === 0) return arr;

  // TODO: normalize k
  // TODO: reverse whole array
  // TODO: reverse first k
  // TODO: reverse rest
  if (!Array.isArray(arr)) throw new TypeError('rotateArrayInPlace: input must be an array');
  if (!Number.isInteger(k)) throw new TypeError('rotateArrayInPlace: k must be integer');

  const n = arr.length;
  if (n === 0) return arr;

  const steps = ((k % n) + n) % n;
  if (steps === 0) return arr;

  // reverse whole array
  reverseRange(arr, 0, n - 1);
  // reverse first k
  reverseRange(arr, 0, steps - 1);
  // reverse rest
  reverseRange(arr, steps, n - 1);

  return arr;
  function reverseRange(array, start, end) {
    while (start < end) {
      [array[start], array[end]] = [array[end], array[start]];
      start++;
      end--;
    }
  }
}
// tests
assertDeepEqual(rotateArrayExtra([1, 2, 3, 4, 5], 2), [4, 5, 1, 2, 3], 'extra: basic');
assertDeepEqual(rotateArrayExtra([1, 2], 5), [2, 1], 'extra: k > n');
assertDeepEqual(rotateArrayExtra([], 3), [], 'extra: empty');

assertDeepEqual(rotateArrayInPlace([1, 2, 3, 4, 5], 2), [4, 5, 1, 2, 3], 'inplace: basic');
assertDeepEqual(rotateArrayInPlace([1, 2], 5), [2, 1], 'inplace: k > n');
assertDeepEqual(rotateArrayInPlace([], 3), [], 'inplace: empty');

console.log('13_rotateArray tests passed ✅');
