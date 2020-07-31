/* @macrome
 * @generated-from ./$split.test.js
 * @generated-by generate/generators/$tests/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncSplit, asyncMap, asyncToArray } from '../../..';

describe('asyncSplit', () => {
  it('should yield an iterable for every item in the iterable', async () => {
    expect(
      await asyncToArray(asyncMap(group => asyncToArray(group), asyncSplit([1, 2, 3]))),
    ).toEqual([[1], [2], [3]]);
  });
});
