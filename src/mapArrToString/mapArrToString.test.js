const mapArrToString = require('./mapArrToString');

describe('mapArrToString', () => {
  test('access value', () => {
    expect(mapArrToString([1, 2, 3])).toEqual(['1', '2', '3']);
  });
  test('all types', () => {
    expect(mapArrToString([1, 2, 3, null, undefined, true, false, 'string', { a: 1 }])).toEqual(['1', '2', '3']);
  });
  test('empty arr', () => {
    expect(mapArrToString([])).toEqual([]);
  });
	test('not access value', () => {
    expect(mapArrToString([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
  });
});
