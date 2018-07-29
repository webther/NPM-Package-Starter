var greeting = require('./greeting');

it('should return `Hello World!', () => {
  expect(greeting()).toBe('Hello World!');
});

it('should return `Hello Jay!', () => {
  expect(greeting('Jay')).toBe('Hello Jay!');
});
