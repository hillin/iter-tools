/* @macrome
 * @generated-from ./$enumerate.d.ts
 * @generated-by generate/generators/$types/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { AsyncSourceIterable, AsyncResultIterable } from '../../types/async-iterable';

declare function asyncEnumerate<T>(
  iterable: AsyncSourceIterable<T>,
): AsyncResultIterable<[number, T]>;

declare function asyncEnumerate<T>(
  firstIdx: number,
  source: AsyncSourceIterable<T>,
): AsyncResultIterable<[number, T]>;

declare function asyncEnumerate(
  firstIdx: number,
): <T>(source: AsyncSourceIterable<T>) => AsyncResultIterable<[number, T]>;

export default asyncEnumerate;
