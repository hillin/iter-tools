/* @macrome
 * @generated-from ./$includes.d.ts
 * @generated-by generate/generators/$types/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { AsyncSourceIterable } from '../../types/async-iterable';

declare function asyncIncludes(
  value: any,
): (iterable: AsyncSourceIterable<any>) => Promise<boolean>;

declare function asyncIncludes(value: any, iterable: AsyncSourceIterable<any>): Promise<boolean>;

export default asyncIncludes;
