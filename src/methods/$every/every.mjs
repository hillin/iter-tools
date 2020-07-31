/* @macrome
 * @generated-from ./$every.js
 * @generated-by generate/generators/$methods/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { iterableCurry } from '../../internal/iterable';

export function every(iterable, predicate) {
  let c = 0;
  for (const item of iterable) {
    if (!predicate(item, c++)) {
      return false;
    }
  }
  return true;
}

export default iterableCurry(every, {
  reduces: true,
});
