/* @macrome
 * @generated-from ./$split-on-subseq.d.ts
 * @generated-by generate/generators/$types/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { AsyncSourceIterable, AsyncResultIterable } from '../../types/async-iterable';

declare function asyncSplitOnSubseq(
  separatorSubseq: AsyncSourceIterable<any>,
): <T>(source: AsyncSourceIterable<T>) => AsyncResultIterable<AsyncResultIterable<T>>;

declare function asyncSplitOnSubseq<T>(
  separatorSubseq: AsyncSourceIterable<any>,
  source: AsyncSourceIterable<T>,
): AsyncResultIterable<AsyncResultIterable<T>>;

export default asyncSplitOnSubseq;
