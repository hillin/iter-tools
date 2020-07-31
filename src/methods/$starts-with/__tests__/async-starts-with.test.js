/* @macrome
 * @generated-from ./$starts-with.test.js
 * @generated-by generate/generators/$tests/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncStartsWith, range } from '../../..';

describe('asyncStartsWith', () => {
  it('returns true if the iterable starts with the given value', async () => {
    expect(await asyncStartsWith(1, range(1, 10))).toBe(true);
  });

  it('returns false if the iterable contains but does not start with the given value', async () => {
    expect(await asyncStartsWith(1, range(0, 10))).toBe(false);
  });

  it('returns true if the iterable contains only the given value', async () => {
    expect(await asyncStartsWith(1, [1])).toBe(true);
  });

  it('returns false if the iterable is empty', async () => {
    expect(await asyncStartsWith(undefined, [])).toBe(false);
  });
});
