/**
 * @generated-from ./$split-on.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { SourceIterable, ResultIterable, ResultSubseqIterable } from '../../types/iterable'; // $ omitted to keep this signature from applying to async
// prettier-ignore

declare function split(separatorValue: string): (source: string) => ResultIterable<string>;
declare function split(separatorValue: any): <T>(source: SourceIterable<T>) => ResultIterable<ResultSubseqIterable<T>>; // prettier-ignore

declare function split(separatorValue: string, source: string): ResultIterable<string>;
declare function split<T>(
  separatorValue: any,
  source: SourceIterable<T>,
): ResultIterable<ResultSubseqIterable<T>>;
export default split;
