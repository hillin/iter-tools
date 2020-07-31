/* @macrome
 * @generated-from ./$some.test.js
 * @generated-by generate/generators/$tests/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncSome } from '../../..';

describe('asyncSome', () => {
  it('returns true if at least one item is true', async () => {
    expect(await asyncSome(n => n % 2 === 0, [1, 2, 3, 4, 5, 6])).toBe(true);
  });

  it('returns false if all items are false', async () => {
    expect(await asyncSome(n => n % 2 === 0, [1, 3, 3, 7, 5, 1])).toBe(false);
  });

  it('returns false if there are no items', async () => {
    expect(await asyncSome((n: never) => n % 2 === 0, null)).toBe(false);
  });

  it('returns true if at least one item is true (using a promise)', async () => {
    expect(await asyncSome(n => Promise.resolve(n % 2 === 0), [1, 2, 3, 4, 5, 6])).toBe(true);
  });
});
