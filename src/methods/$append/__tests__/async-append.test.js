/* @macrome
 * @generated-from ./$append.test.js
 * @generated-by generate/generators/$tests/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncAppend, asyncToArray, asyncWrap } from '../../..';

describe('asyncAppend', () => {
  it('appends a value', async () => {
    expect(await asyncToArray(asyncAppend(3, asyncWrap([1, 2])))).toEqual([1, 2, 3]);
  });
});
