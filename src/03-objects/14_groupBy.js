import { assertDeepEqual } from '../utils/assert.js';

/**
 * groupByLoop
 */
export function groupByLoop(arr, key) {
  if (!Array.isArray(arr)) {
    throw new TypeError('groupBy: input must be an array');
  }
  if (typeof key !== 'string') {
    throw new TypeError('groupBy: key must be a string');
  }

  const result = {};

  for (const item of arr) {
    const groupKey = item?.[key];

    // optional: treat missing key as "undefined" group
    const bucket = String(groupKey);

    if (!result[bucket]) result[bucket] = [];
    //     Use:
    // acc[bucket] ??= [];
    // Why? It only initializes when undefined/null, and reads cleaner.
    result[bucket].push(item);
  }

  return result;
}

/**
 * groupByReduce
 */
export function groupByReduce(arr, key) {
  if (!Array.isArray(arr)) {
    throw new TypeError('groupBy: input must be an array');
  }
  if (typeof key !== 'string') {
    throw new TypeError('groupBy: key must be a string');
  }

  return arr.reduce((acc, item) => {
    const groupKey = item?.[key];
    const bucket = String(groupKey);

    if (!acc[bucket]) acc[bucket] = [];
    acc[bucket].push(item);
    return acc;
  }, {});
}

/* tests */
const users = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'user' },
  { name: 'Eve', role: 'admin' },
];

assertDeepEqual(
  groupByLoop(users, 'role'),
  {
    admin: [
      { name: 'Alice', role: 'admin' },
      { name: 'Eve', role: 'admin' },
    ],
    user: [{ name: 'Bob', role: 'user' }],
  },
  'loop: group by role'
);

assertDeepEqual(
  groupByReduce(users, 'role'),
  {
    admin: [
      { name: 'Alice', role: 'admin' },
      { name: 'Eve', role: 'admin' },
    ],
    user: [{ name: 'Bob', role: 'user' }],
  },
  'reduce: group by role'
);

console.log('14_groupBy tests passed ✅');
