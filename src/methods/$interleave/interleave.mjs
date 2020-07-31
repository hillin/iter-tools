/* @macrome
 * @generated-from ./$interleave.js
 * @generated-by generate/generators/$methods/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { ensureIterable, iterableCurry } from '../../internal/iterable';
import InterleaveBuffer from './internal/buffer';
import makeCanTakeAny from './internal/can-take-any';

export function* interleave(sources, generateInterleaved, options) {
  const buffers = sources.map(
    (iterable, i) => new InterleaveBuffer(ensureIterable(iterable)[Symbol.iterator](), i),
  );

  try {
    const canTakeAny = makeCanTakeAny(buffers);

    yield* options !== undefined
      ? generateInterleaved(options, canTakeAny, ...buffers)
      : generateInterleaved(canTakeAny, ...buffers);
  } finally {
    for (const buffer of buffers) {
      if (buffer.canTake() && typeof buffer._iterator.return === 'function') {
        buffer._iterator.return();
      }
    }
  }
}

export default iterableCurry(interleave, {
  variadic: true,
  optionalArgsAtEnd: true,
  minArgs: 1,
  maxArgs: 2,
});
