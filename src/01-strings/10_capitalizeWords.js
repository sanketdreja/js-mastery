import { assertEqual } from '../utils/assert.js';

/**
 * Capitalize each word: "hello world" -> "Hello World"
 * Keep spacing simple: treat words separated by one or more spaces.
 */
export function capitalizeWords(str) {
  if (typeof str !== 'string') throw new TypeError('capitalizeWords: input must be a string');

  // TODO: split by spaces (handle multiple spaces)
  // TODO: capitalize first letter of each word
  // TODO: join back with single spaces
  const words = str.trim().split(/\s+/);
  const capitalizedWords = words.map((word) => {
    if (word.length === 0) return word;
    return word[0].toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join(' ');
}

/**
 * Optional: regex version
 */
export function capitalizeWordsRegex(str) {
  if (typeof str !== 'string') throw new TypeError('capitalizeWordsRegex: input must be a string');

  // TODO: use replace with word boundary
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

// tests
assertEqual(capitalizeWords('hello world'), 'Hello World', 'basic');
assertEqual(capitalizeWords('  hello   world  '), 'Hello World', 'trim + multi spaces');
assertEqual(capitalizeWords('a'), 'A', 'single');
assertEqual(capitalizeWords(''), '', 'empty');

assertEqual(capitalizeWordsRegex('hello world'), 'Hello World', 'regex basic');
assertEqual(capitalizeWordsRegex('  hello   world  '), 'Hello World', 'regex trim + multi');
assertEqual(capitalizeWordsRegex('a'), 'A', 'regex single');
assertEqual(capitalizeWordsRegex(''), '', 'regex empty');

console.log('10_capitalizeWords tests passed ✅');
