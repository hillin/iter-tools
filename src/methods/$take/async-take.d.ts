/* @macrome
 * @generated-from ./$take.d.ts
 * @generated-by generate/generators/$types/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { AsyncSourceIterable, AsyncResultIterable } from '../../types/async-iterable';

declare function asyncTake<T>(n: number, iterable: AsyncSourceIterable<T>): AsyncResultIterable<T>;

declare function asyncTake<T>(
  n: number,
): (iterable: AsyncSourceIterable<T>) => AsyncResultIterable<T>;

export default asyncTake;
