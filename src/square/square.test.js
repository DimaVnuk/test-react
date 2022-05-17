const square = require('./square');

describe('square', () => {
  let mockValue;
  // before every
  beforeEach(() => {
    mockValue = Math.random();
  });
  //only one before all
  beforeAll(() => {});
  test('access value', () => {
    expect(square(2)).toBe(4);
    expect(square(2)).toBeLessThan(5);
    expect(square(2)).toBeGreaterThan(3);
    expect(square(2)).not.toBeUndefined();
  });
	afterEach()//after every
	afterAll()//only one after all
});
