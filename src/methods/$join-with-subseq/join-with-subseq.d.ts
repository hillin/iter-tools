/* @macrome
 * @generated-from ./$join-with-subseq.d.ts
 * @generated-by generate/generators/$types/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { SourceIterable as SyncSourceIterable } from '../../types/iterable';
import { SourceIterable, ResultIterable } from '../../types/iterable';

declare function joinWithSubseq<W, T>(
  subseq: SyncSourceIterable<W>,
  source: SourceIterable<SourceIterable<T>>,
): ResultIterable<T | W>;

declare function joinWithSubseq<W>(
  subseq: SyncSourceIterable<W>,
): <T>(source: SourceIterable<SourceIterable<T>>) => ResultIterable<T | W>;

export default joinWithSubseq;
