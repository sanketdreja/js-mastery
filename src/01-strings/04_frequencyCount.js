import { assertEqual,assertDeepEqual } from "../utils/assert.js";

/**
 * frequencyCountObject - counts frequency of each character in a string
 * @param {string} str
 * @returns {Object} frequency count of characters in str
 */
export function frequencyCountObject(str) {
  if (typeof str !== "string") {
    throw new TypeError("frequencyCountObject: input must be a string");
  }

  const s = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  const freq = {};
  for (const char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}

/**
 * frequencyCountMap - counts frequency of each character in a string
 * @param {string} str
 * @returns {Map} frequency count of characters in str
 */
export function frequencyCountMap(str) {
  if (typeof str !== "string") {
    throw new TypeError("frequencyCountMap: input must be a string");
  }
  const s = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  const freq = new Map();

  for (const char of s) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }
  return freq;
}

// tests

assertDeepEqual(
  frequencyCountObject("Hello World!"),
  { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 },
  "object: Hello World!",
);
assertDeepEqual(
  frequencyCountObject("aabbcc"),
  { a: 2, b: 2, c: 2 },
  "object: aabbcc",
);
assertDeepEqual(
  frequencyCountMap("Hello World!"),
  new Map([
    ["h", 1],
    ["e", 1],
    ["l", 3],
    ["o", 2],
    ["w", 1],
    ["r", 1],
    ["d", 1],
  ]),
  "map: Hello World!",
);
assertDeepEqual(
  frequencyCountMap("aabbcc"),
  new Map([
    ["a", 2],
    ["b", 2],
    ["c", 2],
  ]),
  "map: aabbcc",
);
