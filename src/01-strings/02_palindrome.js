import { assertEqual } from '../utils/assert.js';

/**
 * Check if a string is a palindrome using two pointers.
 * Normalizes by lowercasing and removing non-alphanumerics.
 * Time: O(n), Space: O(1) extra (excluding normalized string)
 */
export function isPalindromeLoop(str) {
  if (typeof str !== 'string') {
    throw new TypeError('isPalindromeLoop: input must be a string');
  }

  const s = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (s.length <= 1) return true;

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }

  return true;
}

/**
 * Palindrome check using modern methods.
 * Time: O(n), Space: O(n)
 */
export function isPalindromeMethods(str) {
  if (typeof str !== 'string') {
    throw new TypeError('isPalindromeMethods: input must be a string');
  }

  const s = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (s.length <= 1) return true;

  return s === s.split('').reverse().join('');
}

// tests
assertEqual(isPalindromeLoop('madam'), true, 'loop: madam');
assertEqual(isPalindromeLoop('A man, a plan, a canal: Panama'), true, 'loop: panama');
assertEqual(isPalindromeLoop('hello'), false, 'loop: hello');

assertEqual(isPalindromeMethods('madam'), true, 'methods: madam');
assertEqual(isPalindromeMethods('A man, a plan, a canal: Panama'), true, 'methods: panama');
assertEqual(isPalindromeMethods('hello'), false, 'methods: hello');

console.log('02_palindrome tests passed ✅');
