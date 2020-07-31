/* @macrome
 * @generated-from ./repeat-times.test.js
 * @generated-by generate/generators/type-tests/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { repeatTimes } from '../../..';

describe('repeatTimes', () => {
  it('repeats a value n times', () => {
    expect(Array.from(repeatTimes(3, 'x'))).toEqual(['x', 'x', 'x']);
  });

  it('can be reused', () => {
    const myRepeat = repeatTimes(3, 'x');
    expect(Array.from(myRepeat)).toEqual(['x', 'x', 'x']);
    expect(Array.from(myRepeat)).toEqual(['x', 'x', 'x']);
  });
});
