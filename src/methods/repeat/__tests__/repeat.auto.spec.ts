/* @macrome
 * @generated-from ./repeat.test.js
 * @generated-by generate/generators/type-tests/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { repeat, slice } from '../../..';

describe('repeat', () => {
  it('repeats infinitely', () => {
    expect(Array.from(slice(0, 4, repeat('x')))).toEqual(['x', 'x', 'x', 'x']);
  });
});
