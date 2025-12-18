import { assertDeepEqual } from '../utils/assert.js';

/**
 * indexByLoop - indexes array items by a key
 */
export function indexByLoop(arr, key) {
  if (!Array.isArray(arr)) throw new TypeError('indexBy: input must be an array');
  if (typeof key !== 'string') throw new TypeError('indexBy: key must be a string');

  const result = {};

  // TODO: for each item:
  // const indexKey = String(item?.[key]);
  // result[indexKey] = item; // overwrite allowed
  for (const item of arr) {
    const indexKey = String(item?.[key]);
    result[indexKey] = item; // overwrite allowed
  }

  return result;
}

/**
 * indexByReduce - indexes array items by a key using reduce
 */
export function indexByReduce(arr, key) {
  if (!Array.isArray(arr)) throw new TypeError('indexBy: input must be an array');
  if (typeof key !== 'string') throw new TypeError('indexBy: key must be a string');

  return arr.reduce((acc, item) => {
    // TODO
    const indexKey = String(item?.[key]);
    acc[indexKey] = item; // overwrite allowed
    return acc;
  }, {});
}

/* tests */
const users = [
  { id: 1, name: 'A', role: 'admin' },
  { id: 2, name: 'B', role: 'user' },
  { id: 3, name: 'C', role: 'user' },
];

assertDeepEqual(
  indexByLoop(users, 'id'),
  {
    1: { id: 1, name: 'A', role: 'admin' },
    2: { id: 2, name: 'B', role: 'user' },
    3: { id: 3, name: 'C', role: 'user' },
  },
  'loop: indexBy id'
);

assertDeepEqual(
  indexByReduce(users, 'id'),
  {
    1: { id: 1, name: 'A', role: 'admin' },
    2: { id: 2, name: 'B', role: 'user' },
    3: { id: 3, name: 'C', role: 'user' },
  },
  'reduce: indexBy id'
);

// duplicates: later overwrites earlier
const dup = [
  { id: 1, name: 'Old' },
  { id: 1, name: 'New' },
];
assertDeepEqual(indexByLoop(dup, 'id'), { 1: { id: 1, name: 'New' } }, 'loop: dup overwrite');
assertDeepEqual(indexByReduce(dup, 'id'), { 1: { id: 1, name: 'New' } }, 'reduce: dup overwrite');

assertDeepEqual(indexByLoop([], 'id'), {}, 'loop: empty');
assertDeepEqual(indexByReduce([], 'id'), {}, 'reduce: empty');

console.log('15_indexBy tests passed ✅');
