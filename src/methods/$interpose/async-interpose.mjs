/* @macrome
 * @generated-from ./$interpose.js
 * @generated-by generate/generators/$methods/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncIterableCurry } from '../../internal/async-iterable';

export async function* asyncInterpose(source, interposed) {
  let first = true;
  for await (const sourceValue of source) {
    if (!first) {
      yield interposed;
    }
    yield sourceValue;
    first = false;
  }
}

export default asyncIterableCurry(asyncInterpose);
