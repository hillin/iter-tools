/* @macrome
 * @generated-from ./$for-each.js
 * @generated-by generate/generators/$methods/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncIterableCurry } from '../../internal/async-iterable';

export async function asyncForEach(iterable, callback) {
  let c = 0;
  for await (const item of iterable) {
    await callback(item, c++);
  }
}

export default asyncIterableCurry(asyncForEach, {
  reduces: true,
});
