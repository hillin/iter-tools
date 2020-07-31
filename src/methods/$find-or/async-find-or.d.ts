/* @macrome
 * @generated-from ./$find-or.d.ts
 * @generated-by generate/generators/$types/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { AsyncSourceIterable } from '../../types/async-iterable';

declare function asyncFindOr<NF, S extends T, T>(
  notFoundValue: NF,
  predicate: (item: T, i: number) => item is S,
): (iterable: AsyncSourceIterable<T>) => Promise<S | NF>;

declare function asyncFindOr<NF, T>(
  notFoundValue: NF,
  predicate: (item: T, i: number) => boolean | Promise<boolean>,
): (iterable: AsyncSourceIterable<T>) => Promise<T | NF>;

declare function asyncFindOr<NF, S extends T, T>(
  notFoundValue: NF,
  predicate: (item: T, i: number) => item is S,
  iterable: AsyncSourceIterable<T>,
): Promise<S | NF>;

declare function asyncFindOr<NF, T>(
  notFoundValue: NF,
  predicate: (item: T, i: number) => boolean | Promise<boolean>,
  iterable: AsyncSourceIterable<T>,
): Promise<T | NF>;

export default asyncFindOr;
