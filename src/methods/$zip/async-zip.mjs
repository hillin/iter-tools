/* @macrome
 * @generated-from ./$zip.js
 * @generated-by generate/generators/$methods/index.js
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { asyncIterableCurry } from '../../internal/async-iterable';
import { map } from '../$map/map';

export async function* asyncZip(sources) {
  const iters = sources.map(arg => arg[Symbol.asyncIterator]());
  const itersDone = iters.map(iter => ({
    done: false,
    iter,
  }));

  try {
    while (true) {
      const results = map(iters, iter => iter.next());
      const syncResults = await Promise.all(results);

      const zipped = new Array(iters.length);

      let i = 0;
      let allDone = true;
      let done = false;
      for (const result of syncResults) {
        allDone = allDone && result.done;
        done = done || result.done;
        itersDone[i].done = result.done;
        zipped[i] = result.value;
        i++;
      }

      if (done) break;
      yield zipped;
      if (allDone) break;
    }
  } finally {
    for (const { iter, done } of itersDone) {
      if (!done && typeof iter.return === 'function') await iter.return();
    }
  }
}

export default asyncIterableCurry(asyncZip, {
  variadic: true,
});
