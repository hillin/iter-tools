/* @macrome
 * @generated-from ./async-split-with.test.js
 * @generated-by generate/generators/type-tests/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncSplitWith } from '../../..';
import { asyncUnwrapDeep as asyncUw } from '../../../__tests__/async-helpers';
import { asyncWrap } from '../../../__tests__/__framework__/async-wrap';

describe('asyncSplitWith', () => {
  it('should split between every item which is equal to the on argument', async () => {
    expect(
      await asyncUw(asyncSplitWith(i => i === null, asyncWrap([1, null, 2, null, 3]))),
    ).toEqual([[1], [2], [3]]);
  });

  it('should return no parts if source is empty', async () => {
    expect(await asyncUw(asyncSplitWith(i => i, null))).toEqual([]);
  });
});
