/* @macrome
 * @generated-from ./$map.js
 * @generated-by generate/generators/$methods/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { iterableCurry } from '../../internal/iterable';

export function* map(source, func) {
  let c = 0;
  for (const item of source) {
    yield func(item, c++);
  }
}

export default iterableCurry(map);
