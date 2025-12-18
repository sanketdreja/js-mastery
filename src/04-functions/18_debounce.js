import { assertEqual } from '../utils/assert.js';

/**
 * debounce
 * @param {Function} fn
 * @param {number} delay
 * @returns {Function} debounced function with cancel()
 */
export function debounce(fn, delay) {
  if (typeof fn !== 'function') throw new TypeError('debounce: fn must be a function');
  if (typeof delay !== 'number' || Number.isNaN(delay) || delay < 0) {
    throw new TypeError('debounce: delay must be a non-negative number');
  }

  let timerId = null;
  let lastArgs;
  let lastThis;

  function debounced(...args) {
    lastArgs = args;
    lastThis = this;

    if (timerId) clearTimeout(timerId);

    timerId = setTimeout(() => {
      timerId = null;
      fn.apply(lastThis, lastArgs);
    }, delay);
  }

  debounced.cancel = () => {
    if (timerId) clearTimeout(timerId);
    timerId = null;
    lastArgs = undefined;
    lastThis = undefined;
  };

  return debounced;
}

/* tests (basic, time-based) */
let calls = 0;
let lastValue = null;

const debounced = debounce((value) => {
  calls += 1;
  lastValue = value;
}, 30);

// call many times quickly; only last should run
debounced(1);
debounced(2);
debounced(3);

setTimeout(() => {
  assertEqual(calls, 1, 'calls should be 1 after debounce');
  assertEqual(lastValue, 3, 'lastValue should be last call arg');

  // cancel test
  calls = 0;
  lastValue = null;

  debounced(10);
  debounced.cancel();

  setTimeout(() => {
    assertEqual(calls, 0, 'cancel should prevent execution');
    assertEqual(lastValue, null, 'cancel should keep lastValue null');

    console.log('18_debounce tests passed ✅');
  }, 50);
}, 60);
