/* @macrome
 * @generated-from ./filter.test.js
 * @generated-by generate/generators/type-tests/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { filter, toArray, range } from '../../..';

describe('filter', () => {
  it('returns filtered iterable', () => {
    const iter = filter(item => item % 2 === 0, [1, 2, 3, 4, 5, 6]);
    expect(toArray(iter)).toEqual([2, 4, 6]);
  });

  it('returns filtered iterable from iterable', () => {
    const iter = filter(item => item % 2 === 0, range(1, 7));
    expect(toArray(iter)).toEqual([2, 4, 6]);
  });

  it('returns filtered iterable (curried version)', () => {
    const filterEven = filter((item: number) => item % 2 === 0);
    expect(toArray(filterEven(range(1, 7)))).toEqual([2, 4, 6]);
  });

  it('returns empty iterable from null', () => {
    expect(toArray(filter((item: never) => item, null))).toEqual([]);
  });
});
