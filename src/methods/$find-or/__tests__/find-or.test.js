/* @macrome
 * @generated-from ./$find-or.test.js
 * @generated-by generate/generators/$tests/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { findOr, wrap } from '../../..';

describe('findOr', () => {
  it('returns found item', () => {
    expect(findOr(0, item => item === 5, wrap([1, 2, 3, 4, 5, 6]))).toBe(5);
  });

  it('returns notFoundValue if specified and no item found', () => {
    expect(findOr(0, _ => false, wrap([1, 2, 3, 4, 5, 6]))).toBe(0);
  });

  it('returns notFoundValue when iterable is empty', () => {
    expect(findOr(null, (item: never) => item, null)).toBe(null);
  });
});
