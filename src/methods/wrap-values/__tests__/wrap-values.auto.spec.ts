/* @macrome
 * @generated-from ./wrap-values.test.js
 * @generated-by generate/generators/type-tests/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { wrapValues } from '../../..';

describe('wrapValues', () => {
  it('works with Map', () => {
    const map = new Map([['foo', 'bar'], ['fox', 'far']]);
    expect(Array.from(wrapValues(map))).toEqual(['bar', 'far']);
  });

  it('works with null', () => {
    const i = wrapValues(null);
    expect(Array.from(i)).toEqual([]);
  });
});
