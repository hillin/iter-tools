import { $async, $await } from '../../generate/async.macro.cjs';

import { IterableIterator } from './iterable-iterator.js';
import { $PartsIterator } from './$parts-iterator.js';

/**
 * Split an iterable into two parts.
 * Since we know there will be two parts always present them synchronously.
 * This enables consumption as `const [first, second] = asyncMethod(...)`;
 * Any currying of the results must be done with `{ forceSync: true }`
 */
export class $Bisector extends IterableIterator {
  constructor(source, strategy, options) {
    super();
    this.source = source;
    this.strategy = strategy;
    this.options = options;

    this.partsIterator = null;
    this.firstPart = null;
    this.secondPart = null;
    this.currentIdx = 0;
  }

  @$async
  setupFirst() {
    const { source, strategy, options } = this;
    this.partsIterator = this.partsIterator || new $PartsIterator(source, strategy, options);
    if (!this.firstPart) {
      const item = $await(this.partsIterator.next());
      this.firstPart = item.done ? [] : item.value;
    }
  }

  // never async
  next() {
    const self = this;
    switch (this.currentIdx++) {
      case 0:
        return {
          value: $async(function* () {
            $await(self.setupFirst());

            yield* self.firstPart;
          })(),
          done: false,
        };

      case 1:
        return {
          value: $async(function* () {
            $await(self.setupFirst());

            const item = $await(self.partsIterator.next());
            self.secondPart = item.done ? [] : item.value;

            yield* self.secondPart;
          })(),
          done: false,
        };

      default:
        return { value: undefined, done: true };
    }
  }

  return() {
    // If one part is taken but not the other we could never safely call
    // return() on the source in the async version.
    // TODO could I allow taking only one part if it is done before any
    // values are consumed from source?
    // e.g. const [first] = asyncBisectingMethod(...);
    // Should be unnecessary.. splitAt => slice, splitWhen => takeWhile
    if (this.currentIdx === 1) {
      // Generator syntax will not let you do this.
      // You can't throw an error safely inside a finally block
      throw new Error('You must take both parts of a bisector or neither.');
    }
    return { value: undefined, done: true };
  }
}