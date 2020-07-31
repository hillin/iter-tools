/* @macrome
 * @generated-from ./$iterable-includes_.js
 * @generated-by generate/generators/$methods/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncLeadingWindow } from '../$leading-window/async-leading-window';
import asyncToAnySubseq from '../../internal/async-to-any-subseq';
import { iterableStartsWith_ } from '../$starts-with_/iterable-starts-with_';

const startsWithConfig = {
  any: true,
  subseq: true,
};

export async function asyncIterableIncludes_(iterable, config, value) {
  const subseqs = await asyncToAnySubseq(config, value);

  const maxMatchLength = subseqs.reduce((max, { length }) => Math.max(max, length), 1);
  let hasItems = false;

  for await (const buffer of asyncLeadingWindow(iterable, maxMatchLength)) {
    if (iterableStartsWith_(buffer, startsWithConfig, subseqs)) {
      return true;
    }
    hasItems = true;
  }
  return !hasItems && !!subseqs.find(subseq => !subseq.length);
}
