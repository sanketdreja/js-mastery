import { assertEqual, assertDeepEqual } from '../utils/assert.js';

/**
 * createCounter()
 * - private state
 * - returns { inc, dec, get, reset }
 */
export function createCounter(initial = 0) {
  let count = initial;

  return {
    inc(step = 1) {
      count += step;
      return count;
    },
    dec(step = 1) {
      count -= step;
      return count;
    },
    get() {
      return count;
    },
    reset(next = initial) {
      count = next;
      return count;
    },
  };
}

/**
 * createStore()
 * Tiny state store (like mini Redux/Zustand)
 * API: getState, setState, subscribe
 * - setState supports (partialObject) OR (fn(prev)=>nextOrPartial)
 * - should NOT expose internal state by reference (return copy)
 */
export function createStore(initialState = {}) {
  let state = structuredCloneSafe(initialState);
  const listeners = new Set();

  function getState() {
    return structuredCloneSafe(state);
  }

  function setState(updater) {
    const prev = state;

    const nextValue = typeof updater === 'function' ? updater(structuredCloneSafe(prev)) : updater;

    if (nextValue && typeof nextValue === 'object' && !Array.isArray(nextValue)) {
      // treat as partial update
      state = { ...prev, ...nextValue };
    } else {
      // treat as full replace
      state = nextValue;
    }

    for (const fn of listeners) fn(getState());
  }

  function subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener); // unsubscribe
  }

  return { getState, setState, subscribe };
}

// Helper: structuredClone fallback for Node versions without it
function structuredCloneSafe(value) {
  if (typeof structuredClone === 'function') return structuredClone(value);
  return JSON.parse(JSON.stringify(value));
}

/**
 * once(fn)
 * - runs only first time
 * - returns first call result every time
 * - preserves this + arguments
 */
export function once(fn) {
  let called = false;
  let result;

  return function onceWrapper(...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }
    return result;
  };
}

/**
 * memoize(fn)
 * - caches by arguments
 * - preserve this
 * - works for primitives + objects (object identity based)
 */
export function memoize(fn) {
  const cache = new Map();

  return function memoized(...args) {
    const key = makeKey(args); // stable key using nested Map approach
    if (key.hasValue) return key.value;

    const computed = fn.apply(this, args);
    key.store(computed);
    return computed;
  };

  // Creates a nested-map key so objects can be keys without JSON stringify
  function makeKey(args) {
    let node = cache;

    for (const arg of args) {
      if (!node.has(arg)) node.set(arg, new Map());
      node = node.get(arg);
    }

    return {
      hasValue: node.has('__value__'),
      value: node.get('__value__'),
      store(val) {
        node.set('__value__', val);
      },
    };
  }
}

/* ----------------------- TESTS ----------------------- */

// createCounter tests
const c = createCounter(10);
assertEqual(c.get(), 10, 'counter get initial');
assertEqual(c.inc(), 11, 'counter inc');
assertEqual(c.inc(5), 16, 'counter inc step');
assertEqual(c.dec(2), 14, 'counter dec step');
assertEqual(c.reset(), 10, 'counter reset default');
assertEqual(c.reset(99), 99, 'counter reset to value');

// createStore tests
const store = createStore({ count: 0 });
assertDeepEqual(store.getState(), { count: 0 }, 'store initial');

let calls = 0;
let last;
const unsub = store.subscribe((s) => {
  calls++;
  last = s;
});

store.setState({ count: 1 });
assertEqual(calls, 1, 'store subscribe called');
assertDeepEqual(last, { count: 1 }, 'store updated state');

store.setState((prev) => ({ count: prev.count + 1 }));
assertDeepEqual(store.getState(), { count: 2 }, 'store functional updater');

unsub();
store.setState({ count: 3 });
assertEqual(calls, 2, 'unsubscribe works');

// once tests
let hit = 0;
const addOnce = once(function (a, b) {
  hit++;
  return a + b;
});
assertEqual(addOnce(1, 2), 3, 'once first call');
assertEqual(addOnce(10, 20), 3, 'once later calls keep first result');
assertEqual(hit, 1, 'once called only once');

// memoize tests
let calc = 0;
const slowAdd = memoize((a, b) => {
  calc++;
  return a + b;
});
assertEqual(slowAdd(2, 3), 5, 'memoize first');
assertEqual(slowAdd(2, 3), 5, 'memoize cached');
assertEqual(calc, 1, 'memoize caches correctly');

const obj = { x: 1 };
const f = memoize((o) => {
  calc++;
  return o.x + 10;
});
assertEqual(f(obj), 11, 'memoize object');
assertEqual(f(obj), 11, 'memoize object cached');
