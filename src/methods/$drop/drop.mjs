/* @macrome
 * @generated-from ./$drop.js
 * @generated-by generate/generators/$methods/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { iterableCurry } from '../../internal/iterable';

export function* drop(iterable, n) {
  let i = 0;
  for (const item of iterable) {
    if (i++ < n) continue;
    yield item;
  }
}

export default iterableCurry(drop);
