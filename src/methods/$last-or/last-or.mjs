/* @macrome
 * @generated-from ./$last-or.js
 * @generated-by generate/generators/$methods/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { iterableCurry } from '../../internal/iterable';

export function lastOr(iterable, whenEmpty) {
  if (true && Array.isArray(iterable)) {
    return iterable[iterable.length - 1];
  }

  let _item = whenEmpty;

  for (const item of iterable) {
    _item = item;
  }

  return _item;
}

export default iterableCurry(lastOr, {
  reduces: true,
});
