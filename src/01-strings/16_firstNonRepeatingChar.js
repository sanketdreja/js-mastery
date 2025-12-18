import { assertEqual } from '../utils/assert.js';

/**
 * firstNonRepeatingCharMap
 * Time: O(n), Space: O(n)
 * @param {string} str
 * @returns {string|null}
 */
export function firstNonRepeatingCharMap(str) {
  if (typeof str !== 'string')
    throw new TypeError('firstNonRepeatingCharMap: input must be a string');
  if (str.length === 0) return null;

  const freq = new Map();
  for (const ch of str) {
    freq.set(ch, (freq.get(ch) || 0) + 1);
  }

  for (const ch of str) {
    if (freq.get(ch) === 1) return ch;
  }

  return null;
}

/**
 * firstNonRepeatingCharObject
 * Time: O(n), Space: O(n)
 * @param {string} str
 * @returns {string|null}
 */
export function firstNonRepeatingCharObject(str) {
  if (typeof str !== 'string')
    throw new TypeError('firstNonRepeatingCharObject: input must be a string');
  if (str.length === 0) return null;

  const freq = Object.create(null);
  for (const ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  for (const ch of str) {
    if (freq[ch] === 1) return ch;
  }

  return null;
}

/* tests */
assertEqual(firstNonRepeatingCharMap('aabbcdd'), 'c', 'map: middle unique');
assertEqual(firstNonRepeatingCharMap('aabbcc'), null, 'map: none');
assertEqual(firstNonRepeatingCharMap(''), null, 'map: empty');
assertEqual(firstNonRepeatingCharMap('swiss'), 'w', 'map: swiss');

assertEqual(firstNonRepeatingCharObject('aabbcdd'), 'c', 'obj: middle unique');
assertEqual(firstNonRepeatingCharObject('aabbcc'), null, 'obj: none');
assertEqual(firstNonRepeatingCharObject(''), null, 'obj: empty');
assertEqual(firstNonRepeatingCharObject('swiss'), 'w', 'obj: swiss');

console.log('16_firstNonRepeatingChar tests passed ✅');
