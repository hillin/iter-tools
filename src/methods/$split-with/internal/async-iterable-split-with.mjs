/* @macrome
 * @generated-from ./$iterable-split-with.js
 * @generated-by generate/generators/$methods/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { AsyncPartsIterator, AsyncSpliterator, split } from '../../../internal/async-spliterator';

class AsyncPredicateSpliterator extends AsyncSpliterator {
  constructor(sourceIterator, predicate) {
    super(sourceIterator);
    this.predicate = predicate;
    this.item = null;
    this.idx = 0;
  }

  static async nullOrInstance(sourceIterator, predicate) {
    const inst = new AsyncPredicateSpliterator(sourceIterator, predicate);
    return (await inst._isEmpty()) ? null : inst;
  }

  async _isEmpty() {
    this.item = await super.next();
    return this.item.done;
  }

  async next() {
    if (this.item === null) {
      this.item = await super.next();
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

export async function* asyncIterableSplitWith(source, predicate) {
  yield* new AsyncPartsIterator(
    await AsyncPredicateSpliterator.nullOrInstance(source[Symbol.asyncIterator](), predicate),
  );
}
