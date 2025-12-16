import { assertEqual } from '../utils/assert.js';

function normalize(str) {
  if (typeof str !== 'string') {
    throw new TypeError('normalize: input must be a string');
  }
  return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

/**
 * Anagram check using frequency counting.
 * Time: O(n)
 */
export function isAnagramFreq(a, b) {
  const s1 = normalize(a);
  const s2 = normalize(b);

  if (s1.length !== s2.length) return false;

  const freq = new Map();

  for (const ch of s1) {
    freq.set(ch, (freq.get(ch) || 0) + 1);
  }

  for (const ch of s2) {
    const count = freq.get(ch);
    if (!count) return false;

    if (count === 1) freq.delete(ch);
    else freq.set(ch, count - 1);
  }

  return freq.size === 0;
}

/**
 * Anagram check using sorting.
 * Time: O(n log n)
 */
export function isAnagramSort(a, b) {
  const s1 = normalize(a);
  const s2 = normalize(b);

  if (s1.length !== s2.length) return false;

  const sorted1 = s1.split('').sort().join('');
  const sorted2 = s2.split('').sort().join('');

  return sorted1 === sorted2;
}

// tests
assertEqual(isAnagramFreq('listen', 'silent'), true, 'freq: listen/silent');
assertEqual(isAnagramFreq('A gentleman', 'Elegant man'), true, 'freq: phrase');
assertEqual(isAnagramFreq('hello', 'world'), false, 'freq: not anagram');

assertEqual(isAnagramSort('listen', 'silent'), true, 'sort: listen/silent');
assertEqual(isAnagramSort('A gentleman', 'Elegant man'), true, 'sort: phrase');
assertEqual(isAnagramSort('hello', 'world'), false, 'sort: not anagram');

console.log('09_anagramCheck tests passed ✅');
