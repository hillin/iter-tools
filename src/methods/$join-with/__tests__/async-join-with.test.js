/* @macrome
 * @generated-from ./$join-with.test.js
 * @generated-by generate/generators/$tests/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncJoinWith, asyncToArray } from '../../..';

describe('asyncJoinWith', () => {
  it('should join each group with the provided value', async () => {
    expect(await asyncToArray(asyncJoinWith(null, [[1], [2], [3]]))).toEqual([1, null, 2, null, 3]);
  });

  it('should have two adjacent separators when encountering an empty group', async () => {
    expect(await asyncToArray(asyncJoinWith(null, [[1], [], [3]]))).toEqual([1, null, null, 3]);
  });

  it('should yield a single separator when joining two empty groups', async () => {
    expect(await asyncToArray(asyncJoinWith(null, [[], []]))).toEqual([null]);
  });

  it('passes through the empty iterable', async () => {
    expect(await asyncToArray(asyncJoinWith(0, null))).toEqual([]);
  });
});
