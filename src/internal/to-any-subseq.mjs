/* @macrome
 * @generated-from ./$to-any-subseq.js
 * @generated-by generate/generators/$methods/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { toArray as syncToArray } from '../methods/$to-array/to-array';
import { toArray } from '../methods/$to-array/to-array';
import { map } from '../methods/$map/map';

function toAnySubseq({ any, subseq }, value) {
  const values = any ? syncToArray(value) : [value];
  const subseqs = toArray(
    map(values, value => (subseq ? (typeof value === 'string' ? value : toArray(value)) : [value])),
  );

  return subseqs;
}

export default toAnySubseq;
