/* @macrome
 * @generated-from ./async-join-as-string.test.js
 * @generated-by generate/generators/type-tests/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncJoinAsString } from '../../..';
import { asyncWrap } from '../../../__tests__/__framework__/async-wrap';

describe('asyncJoinAsString', () => {
  it('joins an iterable of strings into a single string', async () => {
    expect(await asyncJoinAsString(asyncWrap(['1', '2', '3']))).toEqual('123');
  });

  it('joins an iterable of iterables of strings into a single string', async () => {
    expect(
      await asyncJoinAsString(asyncWrap([asyncWrap('1'), asyncWrap('2'), asyncWrap('3')])),
    ).toEqual('123');
  });

  it('coerces non-strings into strings', async () => {
    const iterable: any = [1, 2, 3];
    expect(await asyncJoinAsString(asyncWrap(iterable))).toEqual('123');
  });
});
