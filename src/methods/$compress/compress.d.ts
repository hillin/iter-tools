/* @macrome
 * @generated-from ./$compress.d.ts
 * @generated-by generate/generators/$types/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { SourceIterable, ResultIterable } from '../../types/iterable';

declare function compress<T>(
  source: SourceIterable<T>,
  included: SourceIterable<boolean>,
): ResultIterable<T>;

export default compress;
