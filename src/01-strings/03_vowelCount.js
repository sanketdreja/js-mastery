import { assertEqual } from '../utils/assert.js';

// vowels: a e i o u (case-insensitive)

/**
 *  vowelcountsLoop - counts the number of vowels in a string
 * @param {String} str
 * @returns  {number} count of vowels in str
 */
export default function vowelCountsLoop(str) {
  if (typeof str !== 'string') {
    throw new TypeError('vowelCountsLoop: input must be a string');
  }

  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (const char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

/**
 * vowelCountsRegex - counts the number of vowels in a string using regex
 * @param {string} str
 * @returns {number} count of vowels in str
 */
export function vowelCountsRegex(str) {
  if (typeof str !== 'string') {
    throw new TypeError('vowelCountsRegex: input must be a string');
  }
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

assertEqual(vowelCountsLoop('hello'), 2, 'loop: hello');
assertEqual(vowelCountsLoop('xyz'), 0, 'loop: xyz');
assertEqual(vowelCountsRegex('hello'), 2, 'regex: hello');
assertEqual(vowelCountsRegex('xyz'), 0, 'regex: xyz');

console.log('03_vowelCount tests passed ✅');
