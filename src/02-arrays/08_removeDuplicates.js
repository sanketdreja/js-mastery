import { assertDeepEqual } from "../utils/assert.js";
export function removeDuplicatesLoop(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("removeDuplicates: input must be an array");
  }

  // TODO: create result array
  // TODO: loop items
  // TODO: if not already in result, push to result
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
export function removeDuplicatesSet(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("removeDuplicates: input must be an array");
  }
  return Array.from(new Set(arr));
}

export function removeDuplicatesFilter(arr) {
  /**removeDuplicatesFilter (The "Logic" Way)
This uses a clever trick with the position (index) of the items.

How it works: The filter function goes through the array. For every item, it asks: "Is your current position the first time you have appeared in this entire list?"

The Trick: arr.indexOf(item) always returns the index of the very first occurrence of that item.

If you are at index 2, but indexOf says that item first appeared at index 0, then you are a duplicate!

If your index matches the indexOf result, you are the original. */
  if (!Array.isArray(arr)) {
    throw new TypeError("removeDuplicates: input must be an array");
  }
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

/* tests */

assertDeepEqual(removeDuplicatesLoop([]), [], "loop: empty");
assertDeepEqual(
  removeDuplicatesLoop([1, 1, 2, 2, 3]),
  [1, 2, 3],
  "loop: numbers",
);
assertDeepEqual(
  removeDuplicatesLoop(["a", "a", "b", "a"]),
  ["a", "b"],
  "loop: strings",
);

assertDeepEqual(removeDuplicatesSet([]), [], "set: empty");
assertDeepEqual(
  removeDuplicatesSet([1, 1, 2, 2, 3]),
  [1, 2, 3],
  "set: numbers",
);
assertDeepEqual(
  removeDuplicatesSet(["a", "a", "b", "a"]),
  ["a", "b"],
  "set: strings",
);

assertDeepEqual(removeDuplicatesFilter([]), [], "filter: empty");
assertDeepEqual(
  removeDuplicatesFilter([1, 1, 2, 2, 3]),
  [1, 2, 3],
  "filter: numbers",
);
assertDeepEqual(
  removeDuplicatesFilter(["a", "a", "b", "a"]),
  ["a", "b"],
  "filter: strings",
);

console.log("08_removeDuplicates tests passed ✅");
