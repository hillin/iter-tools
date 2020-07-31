/* @macrome
 * @generated-from ./async-last-or.test.js
 * @generated-by generate/generators/type-tests/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncLastOr, asyncWrap } from '../../..';

describe('asyncLastOr', () => {
  it('Returns the last item in the iterable', async () => {
    expect(await asyncLastOr(0, asyncWrap([1, 2, 3]))).toEqual(3);
  });

  describe('when iterable is empty', () => {
    it('returns whenEmpty', async () => {
      expect(await asyncLastOr(null, asyncWrap([]))).toBe(null);
    });
  });
});
