/* @macrome
 * @generated-from ./$find-or.test.js
 * @generated-by generate/generators/$tests/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncFindOr, asyncWrap } from '../../..';

describe('asyncFindOr', () => {
  it('returns found item', async () => {
    expect(await asyncFindOr(0, item => item === 5, asyncWrap([1, 2, 3, 4, 5, 6]))).toBe(5);
  });

  it('returns notFoundValue if specified and no item found', async () => {
    expect(await asyncFindOr(0, _ => false, asyncWrap([1, 2, 3, 4, 5, 6]))).toBe(0);
  });

  it('returns notFoundValue when iterable is empty', async () => {
    expect(await asyncFindOr(null, (item: never) => item, null)).toBe(null);
  });

  it('returns found item (using a promise)', async () => {
    expect(await asyncFindOr(0, async item => item === 5, asyncWrap([1, 2, 3, 4, 5, 6]))).toBe(5);
  });
});
