/**
 * @generated-from ./async-split-on-any.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncSplitOnAny, asyncMap, asyncToArray } from '../../..';
describe('asyncSplitOnAny', () => {
  it('should split on an occurance of any value', async () => {
    expect(
      await asyncToArray(
        asyncMap(
          group => asyncToArray(group),
          asyncSplitOnAny([null, undefined], [1, null, undefined, 3]),
        ),
      ),
    ).toEqual([[1], [], [3]]);
  });
  it('does not split when passed no values', async () => {
    expect(
      await asyncToArray(asyncMap(group => asyncToArray(group), asyncSplitOnAny(null, [1, 2, 3]))),
    ).toEqual([[1, 2, 3]]);
  });
  it('passes through the empty iterable', async () => {
    expect(await asyncToArray(asyncSplitOnAny([], null))).toEqual([]);
  });
  it('the empty string is an empty iterable', async () => {
    expect(await asyncToArray(asyncSplitOnAny([], ''))).toEqual([]);
  });
});