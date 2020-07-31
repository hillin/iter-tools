/* @macrome
 * @generated-from ./async-enumerate.test.js
 * @generated-by generate/generators/type-tests/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncEnumerate, asyncToArray, range } from '../../..';

describe('asyncEnumerate', () => {
  it('enumerates iterables', async () => {
    const iter = asyncEnumerate(
      range({
        start: 1,
        end: 4,
      }),
    );
    expect(await asyncToArray(iter)).toEqual([[0, 1], [1, 2], [2, 3]]);
  });

  it('enumerates iterables with start', async () => {
    const iter = asyncEnumerate(
      3,
      range({
        start: 1,
        end: 4,
      }),
    );
    expect(await asyncToArray(iter)).toEqual([[3, 1], [4, 2], [5, 3]]);
  });
});
