/**
 * @generated-from ./$split-at.spec.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import assert from 'static-type-assert';
import { AsyncIterable, AsyncResultSubseqIterable } from '../../../types/async-iterable';
import { asyncSplitAt } from '../../..';
declare const Ø: never;
assert<Array<AsyncResultSubseqIterable<number>>>(asyncSplitAt(3, Ø as AsyncIterable<number>));
assert<Array<AsyncResultSubseqIterable<number>>>(asyncSplitAt(3)(Ø as AsyncIterable<number>));
