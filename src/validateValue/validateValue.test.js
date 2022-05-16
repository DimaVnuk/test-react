const validateValue = require('./validateValue');

test('enter value', () => {
  expect(validateValue(50)).toBe(true);
});

describe('validateValue', () => {
  test('access value', () => {
    expect(validateValue(50)).toBe(true);
  });
  test('negative value', () => {
    expect(validateValue(-1)).toBe(false);
  });
  test('to much', () => {
    expect(validateValue(101)).toBe(false);
  });
	test('border value bottom', () => {
    expect(validateValue(0)).toBe(true);
  });
  test('border value top', () => {
    expect(validateValue(100)).toBe(true);
  });
});
