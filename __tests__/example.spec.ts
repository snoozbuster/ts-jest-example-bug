import { optionalLookup } from '../src/example';

it('should pass', () => {
  expect(optionalLookup('bar')).toBe(4);
});
