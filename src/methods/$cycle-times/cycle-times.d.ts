/* @macrome
 * @generated-from ./$cycle-times.d.ts
 * @generated-by generate/generators/$types/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { SourceIterable, ResultIterable } from '../../types/iterable';

declare function cycleTimes<T>(n: number, iterable: SourceIterable<T>): ResultIterable<T>;

declare function cycleTimes<T>(n: number): (iterable: SourceIterable<T>) => ResultIterable<T>;

export default cycleTimes;
