/* @macrome
 * @generated-from ./last.test.js
 * @generated-by generate/generators/type-tests/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { last, wrap } from '../../..';

describe('last', () => {
  it('Returns the last item in the iterable', () => {
    expect(last(wrap([1, 2, 3]))).toEqual(3);
  });

  it('Returns the last item in an array', () => {
    expect(last([1, 2, 3])).toEqual(3);
  });

  describe('when iterable is empty', () => {
    it('returns undefined', () => {
      expect(last(wrap([]))).toBe(undefined);
    });
  });
});
