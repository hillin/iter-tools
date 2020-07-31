/* @macrome
 * @generated-from ./$iterable-split-with.js
 * @generated-by generate/generators/$methods/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { PartsIterator, Spliterator, split } from '../../../internal/spliterator';

class PredicateSpliterator extends Spliterator {
  constructor(sourceIterator, predicate) {
    super(sourceIterator);
    this.predicate = predicate;
    this.item = null;
    this.idx = 0;
  }

  static nullOrInstance(sourceIterator, predicate) {
    const inst = new PredicateSpliterator(sourceIterator, predicate);
    return inst._isEmpty() ? null : inst;
  }

  _isEmpty() {
    this.item = super.next();
    return this.item.done;
  }

  next() {
    if (this.item === null) {
      this.item = super.next();
    }

    if (this.item.done) {
      return {
        value: undefined,
        done: true,
      };
    } else {
      const { value } = this.item;
      const shouldSplit = this.predicate(value, this.idx++);
      this.item = null;

      return {
        value: shouldSplit ? split : value,
        done: false,
      };
    }
  }
}

export function* iterableSplitWith(source, predicate) {
  yield* new PartsIterator(
    PredicateSpliterator.nullOrInstance(source[Symbol.iterator](), predicate),
  );
}
