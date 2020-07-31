/* @macrome
 * @generated-from ./$leading-window.js
 * @generated-by generate/generators/$methods/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { iterableCurry } from '../../internal/iterable';
import { CircularBuffer, ReadOnlyCircularBuffer } from '../../internal/circular-buffer';
import { concat } from '../$concat/concat';
import { repeatTimes } from '../repeat-times/repeat-times';

export function* leadingWindow(source, size, { filler } = {}) {
  const buffer = new CircularBuffer(size);
  const bufferReadProxy = new ReadOnlyCircularBuffer(buffer);

  buffer.fill(filler);

  let index = 0;
  for (const item of concat(source, repeatTimes(size - 1, filler))) {
    buffer.push(item);
    if (index + 1 >= size) {
      yield bufferReadProxy;
    }
    index++;
  }
}

export default iterableCurry(leadingWindow, {
  minArgs: 1,
  maxArgs: 2,
  optionalArgsAtEnd: true,

  validateArgs(args) {
    if (args[0] && typeof args[0] === 'object') {
      const { filler, size } = args[0];

      if (size !== undefined && args[1] !== undefined) {
        throw new Error(
          'size cannot be specified as both a positional and named argument to leadingWindow',
        );
      }
      args[0] = size;
      args[1] = {
        filler,
      };
    }
  },
});
