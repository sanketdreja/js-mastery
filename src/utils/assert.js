export function assertEqual(actual, expected, msg = '') {
  if (actual !== expected) {
    throw new Error(`❌ ${msg}\nExpected: ${expected}\nActual:   ${actual}`);
  }
}

export function assertDeepEqual(actual, expected, msg = '') {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  if (a !== e) {
    throw new Error(`❌ ${msg}\nExpected: ${e}\nActual:   ${a}`);
  }
}
