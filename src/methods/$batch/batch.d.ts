/* @macrome
 * @generated-from ./$batch.d.ts
 * @generated-by generate/generators/$types/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { SourceIterable, ResultIterable } from '../../types/iterable';

declare function batch(size: number): <T>(source: SourceIterable<T>) => ResultIterable<T[]>;

declare function batch<T>(size: number, source: SourceIterable<T>): ResultIterable<T[]>;

export default batch;
