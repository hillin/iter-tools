/**
 * @generated-from ./$reverse.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from '../../internal/async-iterable';
import { asyncToArray } from '../$to-array/async-to-array';
export async function* asyncReverse(iterable) {
  let array = iterable;
  array = await asyncToArray(array);

  for (let i = array.length - 1; i >= 0; i--) {
    yield array[i];
  }
}
export default asyncIterableCurry(asyncReverse);