/* @macrome
 * @generated-from ./includes.test.js
 * @generated-by generate/generators/type-tests/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { includes, range } from '../../..';

describe('includes', () => {
  it('returns true if the iterable contains the given value', () => {
    expect(includes(1, range(0, 10))).toBe(true);
  });

  it('returns true if the iterable contains only the given value', () => {
    expect(includes(1, [1])).toBe(true);
  });

  it('returns false if the iterable does not contain the given value', () => {
    expect(includes(1, [2])).toBe(false);
  });

  it('returns false if the iterable is empty', () => {
    expect(includes(undefined, [])).toBe(false);
  });
});
