/* @macrome
 * @generated-from ./$starts-with-any.d.ts
 * @generated-by generate/generators/$types/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { SourceIterable } from '../../types/iterable';
import { SourceIterable as SyncSourceIterable } from '../../types/iterable';

declare function startsWithAny(
  values: SyncSourceIterable<any>,
): (iterable: SourceIterable<any>) => boolean;

declare function startsWithAny(
  values: SyncSourceIterable<any>,
  iterable: SourceIterable<any>,
): boolean;

export default startsWithAny;
