/* @macrome
 * @generated-from ./$size.d.ts
 * @generated-by generate/generators/$types/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { SourceIterable } from '../../types/iterable';

declare function size<Iter extends SourceIterable<any>>(
  iterable: Iter,
): Iter extends any[] ? Iter['length'] : number;

export default size;
