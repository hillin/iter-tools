/**
 * @generated-from ./$split-on-subseq.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import {
  AsyncSourceIterable,
  AsyncResultIterable,
  AsyncResultSubseqIterable,
} from '../../types/async-iterable';
declare function asyncSplitOnSubseq(
  separatorSubseq: AsyncSourceIterable<any>,
): <T>(source: AsyncSourceIterable<T>) => AsyncResultIterable<AsyncResultSubseqIterable<T>>;
declare function asyncSplitOnSubseq<T>(
  separatorSubseq: AsyncSourceIterable<any>,
  source: AsyncSourceIterable<T>,
): AsyncResultIterable<AsyncResultSubseqIterable<T>>;
export default asyncSplitOnSubseq;
