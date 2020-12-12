import { $async, $await } from '../../../generate/async.macro.cjs';

import { $iterableCurry } from '../../internal/$iterable.js';
import { $seqsToArray } from '../../internal/$any-seq.js';
import { __startsWithSeq } from '../$starts-with-seq/starts-with-seq.js';
import { $__windowAhead } from '../$window-ahead/$window-ahead.js';
import { $__spliterate } from '../$spliterate/$spliterate.js';

function getMatchingLength(buffer, separatorSeqs, same) {
  for (const subsequence of separatorSeqs) {
    if (__startsWithSeq(buffer, subsequence, same)) {
      return subsequence.length;
    }
  }

  return 0;
}

$async;
function* $anySeqspliterator(split, { separatorSeqs, same }, source) {
  const maxMatchLength = separatorSeqs.reduce((max, { length }) => Math.max(max, length), 1);

  let skip = 0;

  $await;
  for (const buffer of $__windowAhead(source, maxMatchLength, { useFiller: false })) {
    if (skip > 0) {
      skip--;
      continue;
    }
    const matchingLength = getMatchingLength(buffer, separatorSeqs, same);

    if (matchingLength > 0) {
      yield split;
      skip = matchingLength - 1;
    } else {
      yield buffer.get(0);
    }
  }
}

$async;
export function* $__splitOnAnySeq(source, separatorSeqs, same = Object.is) {
  const separatorSeqsArr = $await($seqsToArray(separatorSeqs)).filter((s) => s.length > 0);

  yield* $__spliterate(source, $anySeqspliterator, {
    separatorSeqs: separatorSeqsArr.sort((a, b) => b.length - a.length),
    same,
  });
}

export const $splitOnAnySeq = /*#__PURE__*/ $iterableCurry($__splitOnAnySeq, {
  minArgs: 1,
  maxArgs: 2,
});
