/* @macrome
 * @generated-from ./$prepend.js
 * @generated-by generate/generators/$methods/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncIterableCurry } from '../../internal/async-iterable';

export async function* asyncPrepend(source, value) {
  yield value;
  yield* source;
}

export default asyncIterableCurry(asyncPrepend);
