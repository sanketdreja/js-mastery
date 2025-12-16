import { assertEqual } from '../utils/assert.js';

function add(a, b) {
  return a + b;
}

assertEqual(add(2, 3), 5, '2 + 3 should equal 5');

console.log('01-basics passed ✅');
