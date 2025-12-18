import { assertDeepEqual } from '../utils/assert.js';

/**
 * Chunk array using loop.
 * @param {any[]} arr
 * @param {number} size
 * @returns {any[][]}
 */
export function chunkArrayLoop(arr, size) {
  if (!Array.isArray(arr)) throw new TypeError('chunkArrayLoop: input must be an array');
  if (!Number.isInteger(size) || size <= 0)
    throw new TypeError('chunkArrayLoop: size must be a positive integer');

  // TODO: build chunks manually

  const result = [];

  for (let i = 0; i < arr.length; i += size) {
    const chunk = [];

    for (let j = i; j < i + size && j < arr.length; j++) {
      chunk.push(arr[j]);
    }

    result.push(chunk);
  }

  return result;
}

/**
 * Chunk array using slice.
 */
export function chunkArraySlice(arr, size) {
  if (!Array.isArray(arr)) throw new TypeError('chunkArraySlice: input must be an array');
  if (!Number.isInteger(size) || size <= 0)
    throw new TypeError('chunkArraySlice: size must be a positive integer');

  // TODO: loop with slice
  const result = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}

// tests
assertDeepEqual(chunkArrayLoop([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]], 'loop: basic');
assertDeepEqual(chunkArrayLoop([], 3), [], 'loop: empty');
assertDeepEqual(chunkArrayLoop([1, 2], 5), [[1, 2]], 'loop: size > length');

assertDeepEqual(chunkArraySlice([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]], 'slice: basic');
assertDeepEqual(chunkArraySlice([], 3), [], 'slice: empty');
assertDeepEqual(chunkArraySlice([1, 2], 5), [[1, 2]], 'slice: size > length');

console.log('12_chunkArray tests passed ✅');
