/* @macrome
 * @generated-from ./first.test.js
 * @generated-by generate/generators/type-tests/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { first, range } from '../../..';

describe('first', () => {
  describe('when iterable contains items', () => {
    it('returns first item', () => {
      const iter = range(10);
      expect(first(iter)).toBe(0);
    });
  });

  describe('when iterable is empty', () => {
    it('returns undefined', () => {
      const iter = range(0);
      expect(first(iter)).toBe(undefined);
    });
  });
});
