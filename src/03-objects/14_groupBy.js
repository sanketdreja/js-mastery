import { assertDeepEqual } from '../utils/assert.js';

/**
 * groupByLoop - groups array items by a key using loop.
 * @param {Object[]} arr
 * @param {(item: Object) => string} keyFn
 * @returns {Object}
 */
export function groupByLoop(arr, keyFn) {
  if (!Array.isArray(arr)) {
    throw new TypeError('groupByLoop: input must be an array');
  }
  if (typeof keyFn !== 'function') {
    throw new TypeError('groupByLoop: keyFn must be a function');
  }

  const result = {};

  for (const item of arr) {
    const key = keyFn(item);

    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(item);
  }

  return result;
}

/**
 * groupByReduce - groups array items by a key using reduce.
 * @param {Object[]} arr
 * @param {(item: Object) => string} keyFn
 * @returns {Object}
 */
export function groupByReduce(arr, keyFn) {
  if (!Array.isArray(arr)) {
    throw new TypeError('groupByReduce: input must be an array');
  }
  if (typeof keyFn !== 'function') {
    throw new TypeError('groupByReduce: keyFn must be a function');
  }

  return arr.reduce((acc, item) => {
    const key = keyFn(item);

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(item);
    return acc;
  }, {});
}

/* tests */

const users = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'user' },
  { name: 'Charlie', role: 'admin' },
  { name: 'Dave', role: 'user' },
];

assertDeepEqual(
  groupByLoop(users, (u) => u.role),
  {
    admin: [
      { name: 'Alice', role: 'admin' },
      { name: 'Charlie', role: 'admin' },
    ],
    user: [
      { name: 'Bob', role: 'user' },
      { name: 'Dave', role: 'user' },
    ],
  },
  'loop: group by role'
);

assertDeepEqual(
  groupByReduce(users, (u) => u.role),
  {
    admin: [
      { name: 'Alice', role: 'admin' },
      { name: 'Charlie', role: 'admin' },
    ],
    user: [
      { name: 'Bob', role: 'user' },
      { name: 'Dave', role: 'user' },
    ],
  },
  'reduce: group by role'
);

console.log('14_groupBy tests passed ✅');
