/**
 * @generated-from ./$split-on-any.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { SourceIterable as SyncSourceIterable } from '../../types/iterable';
import { SourceIterable, ResultIterable, ResultSubseqIterable } from '../../types/iterable';
declare function splitOnAny(
  separatorValues: SyncSourceIterable<string>,
): (source: string) => ResultIterable<string>;
declare function splitOnAny(
  separatorValues: SyncSourceIterable<string>,
  source: string,
): ResultIterable<string>;
declare function splitOnAny(
  separatorValues: SyncSourceIterable<any>,
): <T>(source: SourceIterable<T>) => ResultIterable<ResultSubseqIterable<T>>;
declare function splitOnAny<T>(
  separatorValues: SyncSourceIterable<any>,
  source: SourceIterable<T>,
): ResultIterable<ResultSubseqIterable<T>>;
export default splitOnAny;
