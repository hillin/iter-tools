/**
 * @generated-from ./$to-array.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { ensureIterable } from '../../internal/iterable.js';

export function toArray(source) {
  const out = [];
  for (const item of ensureIterable(source)) {
    out.push(item);
  }
  return out;
}

export default toArray;