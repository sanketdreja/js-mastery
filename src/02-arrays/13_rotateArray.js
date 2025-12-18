import { assertDeepEqual } from '../utils/assert.js';

/**
 * rotateArrayExtra - returns NEW rotated array (does not mutate input)
 * @param {any[]} arr
 * @param {number} k
 * @returns {any[]}
 */
export function rotateArrayExtra(arr, k) {
  if (!Array.isArray(arr)) throw new TypeError('rotateArrayExtra: input must be an array');
  if (typeof k !== 'number' || Number.isNaN(k))
    throw new TypeError('rotateArrayExtra: k must be a number');

  const n = arr.length;
  if (n === 0) return [];

  const steps = ((k % n) + n) % n; // handles negative k too
  if (steps === 0) return arr.slice();

  return arr.slice(n - steps).concat(arr.slice(0, n - steps));
}

/**
 * rotateArrayInPlace - rotates IN PLACE (mutates input)
 * Uses reverse trick: reverse all, reverse first k, reverse rest
 * @param {any[]} arr
 * @param {number} k
 * @returns {any[]} same array reference (mutated)
 */
export function rotateArrayInPlace(arr, k) {
  if (!Array.isArray(arr)) throw new TypeError('rotateArrayInPlace: input must be an array');
  if (typeof k !== 'number' || Number.isNaN(k))
    throw new TypeError('rotateArrayInPlace: k must be a number');

  const n = arr.length;
  if (n === 0) return arr;

  const steps = ((k % n) + n) % n;
  if (steps === 0) return arr;

  reverseRange(arr, 0, n - 1);
  reverseRange(arr, 0, steps - 1);
  reverseRange(arr, steps, n - 1);

  return arr;
}

function reverseRange(arr, left, right) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}

/* tests */
assertDeepEqual(rotateArrayExtra([1, 2, 3, 4, 5], 2), [4, 5, 1, 2, 3], 'extra: basic');
assertDeepEqual(rotateArrayExtra([1, 2, 3, 4, 5], 0), [1, 2, 3, 4, 5], 'extra: k=0');
assertDeepEqual(rotateArrayExtra([1, 2, 3, 4, 5], 5), [1, 2, 3, 4, 5], 'extra: k=n');
assertDeepEqual(rotateArrayExtra([1, 2, 3, 4, 5], 7), [4, 5, 1, 2, 3], 'extra: k>n');
assertDeepEqual(rotateArrayExtra([1, 2, 3, 4, 5], -1), [2, 3, 4, 5, 1], 'extra: negative k');
assertDeepEqual(rotateArrayExtra([], 3), [], 'extra: empty');

const a1 = [1, 2, 3, 4, 5];
rotateArrayInPlace(a1, 2);
assertDeepEqual(a1, [4, 5, 1, 2, 3], 'inPlace: basic');

const a2 = [1, 2, 3, 4, 5];
rotateArrayInPlace(a2, -1);
assertDeepEqual(a2, [2, 3, 4, 5, 1], 'inPlace: negative');

const a3 = [];
rotateArrayInPlace(a3, 10);
assertDeepEqual(a3, [], 'inPlace: empty');

console.log('13_rotateArray tests passed ✅');
