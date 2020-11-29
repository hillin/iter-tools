/**
 * @generated-from ./$unwrap.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncIterable } from '../../types/async-iterable';

declare function asyncUnwrap<T>(iterable: AsyncIterable<T>): Array<T>;

declare function asyncUnwrapDeep<T>(iterable: AsyncIterable<AsyncIterable<T>>): Array<Array<T>>;

declare function asyncUnwrapDeep<T>(iterable: T): T;

export { asyncUnwrap, asyncUnwrapDeep };