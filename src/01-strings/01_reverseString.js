//loop

import { assertEqual } from '../utils/assert.js';
/**
 *
 * @param {string} str
 * @returns {string}string reversed
 * time: O(n), space: O(n);
 */

console.log('01_reverseString.js loaded ✅');
export function reverseStringLoops(str) {
  if (typeof str !== 'string') {
    throw new TypeError('reverseStringLoops : Input must be a string');
  }
  let out = '';
  for (let i = str.length - 1; i >= 0; i--) {
    out += str[i];
  }

  return out;
}

//methods
/**
 *
 * @param {string} str
 * @returns  {string}string reversed
 * time: O(n), space: O(n);
 */
export function reverseStringMethods(str) {
  if (typeof str !== 'string') {
    throw new TypeError(' reverseStringMethods : Input must be a string');
  }
  return str.split('').reverse().join('');
}

//recursion
/**
 *
 * @param {string} str
 * @returns {string}string reversed
 * time: O(n), space: O(n);
 */
export function reverseStringRecursion(str) {
  if (typeof str !== 'string') {
    throw new TypeError('reverseStringRecursion : Input must be a string');
  }
  if (str === '') {
    return '';
  }
  return reverseStringRecursion(str.substr(1)) + str.charAt(0);
}

/** Tiny self-tests (no framework yet) */

assertEqual(reverseStringLoops('hello'), 'olleh');
assertEqual(reverseStringLoops('abc'), 'cba', 'reverseStringLoop');
assertEqual(reverseStringMethods('abc'), 'cba', 'reverseStringMethod');

assertEqual(reverseStringRecursion('abc'), 'cba', 'reverseStringRecursion');

console.log('All tests passed ✅ for 01_reverseString.js');
