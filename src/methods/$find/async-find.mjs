/* @macrome
 * @generated-from ./$find.js
 * @generated-by generate/generators/$methods/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncIterableCurry } from '../../internal/async-iterable';
import { asyncFindOr } from '../$find-or/async-find-or';

export function asyncFind(iterable, predicate) {
  return asyncFindOr(iterable, undefined, predicate);
}

export default asyncIterableCurry(asyncFind, {
  reduces: true,
});
