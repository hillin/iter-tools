# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [UNRELEASED]
### Added
**Methods**
 - `distinct`

## [7.3.0] - 2022-3-23
### Changed
 - A `Forkerator` can now be used as an iterable.


## [7.2.0] - 2021-12-22
### Added
**Methods**
 - `isString`, `notString`
 - `isArray`, `notArray`


## [7.1.0] - 2021-03-20
### Added
**Methods**
 - `forkerate`, `asyncForkerate`


## [7.0.1] - 2020-12-12
### Fixed
`require('iter-tools')` in node 12+ (`ERR_REQUIRE_ESM`)


## [7.0.0] - 2020-12-12
### Removed
**Folders**
 - `es2015`: It is expected that most users will switch to `import ... from 'iter-tools-es'`.

**Methods**
 - `joinAsString`, `asyncJoinAsString` (Instead use `str(join(...))`)
 - `joinAsStringWith`, `asyncJoinAsStringWith` (Instead use `str(joinWith(sep, ...))`)
 - `regexpExec`
 - `nullOr`, `nullOrAsync` (Instead use `peekerate`)
 - `asyncFlatMapParallel`
 - `asyncMapParallel` (Instead use `asyncBuffer(n, asyncMap(fn, iterable))`)
 - `asyncFilterParallel` (Instead use `asyncBuffer(n, asyncFilter(fn, iterable))`)
 - `group`, `asyncGroup` (`splitGroups` is a drop-in replacement)
 - `combinations`, `combinationsWithReplacement`, `permutations`, `product` (use `@iter-tools/combinatorics`)
 - `leadingWindow`, `asyncLeadingWindow` (Instead use `windowAhead`. Only arg order changed)
 - `trailingWindow`, `asyncTrailingWindow` (Instead use `windowBehind`. Only arg order changed)

**Arguments**
 - `n` from `fork` and `asyncFork`. Use destructuring or call `return()` on the forks iterable.

**Exports**
 - `InterleaveBuffer`, `AsyncInterleaveBuffer`

**Overloads**
 - `{ size, filler }` from `leadingWindow`, `asyncLeadingWindow`, `trailingWindow`, `asyncTrailingWindow`. Instead use e.g. `leadingWindow(size, { filler })`.
 - `splitGroups(null)`, `asyncSplitGroups(null)`. (Use `splitGroups(iterable)`)

## Renamed
**Folders**
 - `es2018` moved to separate package: `iter-tools-es`.
   - e.g. `import { map } from 'iter-tools/es2018` is now `import { map } from 'iter-tools-es`

**Methods**
 - `last`, `asyncLast` to `takeLast`, `asyncTakeLast`
 - `lastOr`, `asyncLastOr` to `takeLastOr`, `asyncTakeLastOr`
 - `groupBy`, `asyncGroupBy` to `splitGroups`, `asyncSplitGroups`
 - `splitAt`, `asyncSplitAt` to `bisect`, `asyncBisect`
 - `splitWith`, `asyncSplitWith` to `splitWhen`, `asyncSplitWhen`
 - `*subseq` to `*seq`
   - `startsWithSubseq`, `asyncStartsWithSubseq` to `startsWithSeq`, `asyncStartsWithSeq`
   - `startsWithAnySubseq`, `asyncStartsWithAnySubseq` to `startsWithAnySeq`, `asyncStartsWithAnySeq`
   - `includesSubseq`, `asyncIncludesSubseq` to `includesSeq`, `asyncIncludesSeq`
   - `includesAnySubseq`, `asyncIncludesAnySubseq` to `includesAnySeq`, `asyncIncludesAnySeq`
   - `splitOnSubseq`, `asyncSplitOnSubseq` to `splitOnSeq`, `asyncSplitOnSeq`
   - `splitOnAnySubseq`, `asyncSplitOnAnySubseq` to `splitOnAnySeq`, `asyncSplitOnAnySeq`
   - `joinWithSubseq`, `asyncJoinWithSubseq` to `joinWithSeq`, `asyncJoinWithSeq`

### Changed
 - `interleave` and `asyncInterleave` now wrap sources with `Peekerator` instead of `InterleaveBuffer`. Change `function* (canTakeAny, ...buffers) { while(canTakeAny()) { ... } }` to `function* (all, ...peekrs) { while(!all.done) { ... } }`.
 - `last` and `lastOr` no longer have O(1) optimizations for array inputs. Instead use `arrayLast` or `arrayLastOr`.
 - `batch`, `asyncBatch` now yield batches which are iterables but not arrays. The batches must be consumed in order. For the old behavior use `map(toArray, batch(...))`.
 - `*any` and `*anySubseq` methods now require the possible values or subseqs to be passed as a non-nullable array. To replicate the old behavior change `startsWithAny(valuesIterable)` to `startsWithAny(wrap([...valuesIterable])`.
 - `includesAny`, `startsWithAny` (and async and seq variants) now return `false` when nothing is being searched for, e.g. `includesAny([], iterable) === false`.
 - `windowAhead`

### Added
**Methods**
 - `arrayFirst`, `arrayFirstOr`
 - `arrayLast`, `arrayLastOr`
 - `arrayReverse`
 - `interposeSeq`, `asyncInterposeSeq`
 - `peekerate`, `asyncPeekerate`
 - `spliterate`, `asyncSpliterate`
 - `spliterateGrouped`, `asyncSpliterateGrouped`
 - `window`, `asyncWindow`
 - `stringFrom`, `stringFromAsync`
 - `isNull`, `notNull`
 - `isUndefined`, `notUndefined`
 - `isNil`, `notNil`
 - `isObject`, `notObject`
 - `isIterable`, `notIterable`, `isAsyncIterable`, `notAsyncIterable`
 - `isWrappable`, `notWrappable`, `isAsyncWrappable`, `notAsyncWrappable`
 - `isLoopable`, `notLoopable`, `isAsyncLoopable`, `notAsyncLoopable`
 - `deepEqual`, `asyncDeepEqual`
 - `windowAhead`, `windowBehind` ,`asyncWindowAhead`, `asyncWindowBehind`

**Overloads**
 - `bisect(predicate)`, `asyncBisect(predicate)`

**Aliases**
 - `str` for `stringFrom`, `asyncStr` for `stringFromAsync`

**Arguments**
 - `useFiller` option for `leadingWindow` and `asyncLeadingWindow`.
 - `proto` passed to `Object.create` for `objectFrom` and `objectFromAsync` (also `toObject` and `asyncToObject`).
 - `same` to `equal`, `includes`, `includesAny`, `includesSeq`, `includesAnySeq`, `startsWith`, `startsWithAny`, `startsWithSeq`, `startsWithAnySeq`, `splitOn`, `splitOnAny`, `splitOnSeq`, `splitOnAnySeq` (and async variants: `asyncEqual`, `asyncIncludes`, `asyncIncludesAny`, `asyncIncludesSeq`, `asyncIncludesAnySeq`, `asyncStartsWith`, `asyncStartsWithAny`, `asyncStartsWithSeq`, `asyncStartsWithAnySeq`, `asyncSplitOn`, `asyncSplitOnAny`, `asyncSplitOnSeq`, `asyncSplitOnAnySeq`)

**Instance Methods**
 - Peekerator: `asIterator` method

### Changed
 - Removed O(1) array optimizations from `last` and `lastOr`
 - Factorial no attempts to use BigNum internally. Some inputs may now cause `combinations().size` or `combinationsWithReplacement().size` to overflow during computation.

**Instance Methods**
 - Peekerator: `advance` and `return` methods now return `this` (was `undefined`).


## [7.0.0-rc.0] - 2019-12-13
### Removed
**Methods**
 -  `iter`, `asyncIter`
 -  `iterable`, `asyncIterable`
 -  `tee`, `asyncTee`
 -  `execute`, `asyncExecute` (Instead use `map(_ => callback(), range())` (or `asyncMap(...)`))
 -  `merge`, `asyncMerge` (Instead use `collate`, `roundRobin`, `interleave` (or async equivalents))
 -  `splitLines`, `asyncSplitLines` (Instead use `asyncMap(asyncJoinAsString, asyncSplitOnAnySubseq(['\r\n', '\n'], asyncFlat(fileChunks)))` or `splitOnAnySubseq(['\r\n', 'n'], fileString)`. Sorry, a better way is coming soon!)
 -  `regexpSplit` (Instead use `splitWith(regexp, str)`)
 -  `cursor`, `asyncCursor` (Instead use `leadingWindow` or `trailingWindow` (or async equivalents))
 -  `keys` (Instead use `objectKeys(obj)` or `wrapKeys({ keys(); }))`)
 -  `values` (Instead use `objectValues(obj)` or `wrapValues({ values(); }))`)
 -  `entries` (Instead use `objectEntries(obj)` or `wrapEntries({ entries(); }))`)

**Overloads**
 -  `size({ size })` and `size(array)` (Instead use `getSize`)
 -  `cycle(times, iterable)`, `asyncCycle(times, iterable)` and `repeat(times, value)` (Instead use `cycleTimes(n, iterable)` (or `asyncCycleTimes`), and `repeatTimes(n, iterable)`)
 -  `consume(callback, iterable)`, `asyncConsume(callback, iterable)` (Instead use `forEach`)

**Aliases**
 -  `count` was an alias for `range`
 -  `chain`, `asyncChain` were aliases for `concat`, `asyncConcat`
 -  `zipLongest`, `asyncZipLongest` were aliases for `zipAll`, `asyncZipAll`

**Arguments**
 -  `concurrency` from `asyncMap`, `asyncFilter`.
 -  Extra arguments from `compose`, `pipe`, `pipeExec`. Previously all initial arguments were given to the outermost composed function.

**Helper methods**
 -  `mergeByComparison`, `mergeByChance`, `mergeByPosition`, `asyncMergeByComparison`, `asyncMergeByChance`, `asyncMergeByPosition`

### Renamed
**Methods**
 -  `pipe` to `execPipe`

### Changed
 -  `import 'iter-tools/es5/method'` should now be `import 'iter-tools/method'`.
 -  **IMPORTANT**; **BREAKING**: `slice(n)` is now equivalent to `[].slice(n)`, not `[].slice(0, n)`. You should now write `slice(0, n, iterable)`.
 -  **IMPORTANT**; **BREAKING**: `repeat` order of arguments changed. You must now write `repeat(3, 'x')` instead of `repeat(x, 3)`.
 -  All functions return iterables that can consumed multiple times.
 -  It is now an error to make an empty partial application, e.g. `map()`.
 -  `size(iterable)` now always consumes `iterable`. Use `getSize` if you know this is unnecessary.
 -  `takeSorted` and `asyncTakeSorted`: Both `n` and `comparator` arguments are now optional.
 -  `enumerate` and `asyncEnumerate`: optional starting idx is now specified before iterable. 
 -  Optional configuration arguments can no longer be undefined. This was at odds with considering undefined as a valid iterable.
 -  `range` can now called as either `range(end)` or `range(start, end, step)`. This matches Python.
 -  `zipAll` now takes optional `filler` argument to use in place of values from exhausted iterables.
 -  `fork` and `asyncFork` now take an extra optional argument: the number of forks.
 -  `permutations`, `combinations`, `combinationsWithReplacement`: order of arguments is changed. Can now be curried.
 -  `permutations`, `combinations`, `combinationsWithReplacement`, and `product`: `getSize()` is now just `size`.
 -  `groupBy()` and `asyncGroupBy(null)` now return a partial application instead of an iterable.
 -  `groupBy` now throws an error if the groups are accessed out of order.
 -  `asyncBuffer` now starts buffering immediately instead of when the first item is taken.
 -  For most Typescript generic method types, the order of the generics has changed. (Note: this only matters if you are explicitly providing values for the generics.)

### Added
**Methods**
 -  `pipe`
 -  `collate`, `asyncCollate`
 -  `roundRobin`, `asyncRoundRobin`
 -  `call`, `apply`
 -  `wrap`, `asyncWrap`
 -  `wrapKeys`
 -  `wrapValues`
 -  `wrapEntries`
 -  `objectKeys`
 -  `objectValues`
 -  `objectEntries`
 -  `toObject`, `asyncToObject`
 -  `findOr`, `asyncFindOr`
 -  `firstOr`, `asyncFirstOr`
 -  `last`, `asyncLast`
 -  `lastOr`, `asyncLastOr`
 -  `take`, `asyncTake`
 -  `drop`, `asyncDrop`
 -  `when`
 -  `isEmpty`, `asyncIsEmpty`
 -  `asyncMapParallel`, `asyncFilterParallel`, `asyncFlatMapParallel`
 -  `interleave`, `asyncInterleave`, `asyncInterleaveReady`
 -  `equal`, `asyncEqual`
 -  `includes`, `includesAny`, `includesSubseq`, `includesAnySubseq`, `asyncIncludes`, `asyncIncludesAny`, `asyncIncludesSubseq`, `asyncIncludesAnySubseq`
 -  `startsWith`, `startsWithAny`, `startsWithSubseq`, `startsWithAnySubseq`, `asyncStartsWith`, `asyncStartsWithAny`, `asyncStartsWithSubseq`, `asyncStartsWithAnySubseq`
 -  `splitOn`, `splitOnAny`, `splitOnSubseq`, `splitOnAnySubseq`, `asyncSplitOn`, `asyncSplitOnAny`, `asyncSplitOnSubseq`, `asyncSplitOnAnySubseq`
 -  `split`, `asyncSplit`
 -  `splitWith`, `asyncSplitWith`
 -  `splitAt`, `asyncSplitAt`
 -  `join`, `asyncJoin`
 -  `joinWith`, `joinWithSubseq`, `asyncJoinWith`, `asyncJoinWithSubseq`
 -  `joinAsString`, `joinAsStringWith`, `asyncJoinAsString`, `asyncJoinAsStringWith`
 -  `group`, `asyncGroup`
 -  `explode`, `asyncExplode`
 -  `reverse`, `asyncReverse`
 -  `leadingWindow`, `asyncLeadingWindow`
 -  `trailingWindow`, `asyncTrailingWindow`
 -  `cycleTimes`, `asyncCycleTimes`
 -  `repeatTimes`
 -  `getSize`

**Aliases**
 -  `arrayFrom`, `arrayFromAsync` as aliases for `toArray`, `asyncToArray`
 -  `objectFrom`, `objectFromAsync` as aliases for `toObject`, `asyncToObject`

**Arguments**
 -  [optional] `n` (count) for `fork` and `asyncFork`
 -  [optional] `n` (count) for `cycle` and `asyncCycle`
 -  [optional] `filler` (specified as `{ filler }`) for `zip` and `zipAll`
 -  [optional] `notFoundValue` for `find` and `asyncFind`

**Overloads**
 -  `range(start, end, [step])` (Matches Python.)

### Deprecated
**Overloads**
 -  `groupBy(null, source)` and `asyncGroupBy(null, source)`. Instead use `group(source)` and `asyncGroup(source)`.
 -  `consume(callback, source)` and `asyncConsume(callback, source)`. Instead use `forEach(callback, source)` and `asyncForEach(callback, source)`.

 ### Fixed
 -  A wide variety of Typescript type bugs were identified and squashed. You can see the full list [on Github](https://github.com/iter-tools/iter-tools/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3Agenerate-types)



## [6.2.3] - 2019-01-23
### Added
**Methods**
 -  `flat`, `asyncFlat`
 -  `cursor`, `asyncCursor`
 -  `merge`, `asyncMerge`
 -  `pipe`
 -  `partition`, `asyncPartition`

**Helper methods**
 -  `mergeByComparison`, `mergeByChance`, `mergeByPosition`, `asyncMergeByComparison`, `asyncMergeByChance`, `asyncMergeByPosition`

**Arguments**
 -  [optional] `concurrency` for `asyncMap`, `asyncFilter`

### Fixed
 -  async function can take an async callback
 -  `find` and `asyncFind`: now return undefined when an item has not been found

### Changed
 -  combinatory function generators return an iterable with an extra method to calculate the size


## [6.1.7] - 2018-11-06
### Fixed
 -  Added polyfills to transpiled versions


## [6.1.6] - 2018-11-06
### Fixed
 -  Bump all deps (code vulnerability)


## [6.1.5] - 2018-10-23
### Fixed
 -  Removed clone-regexp dependency


## [6.1.4] - 2018-09-22
### Fixed
 -  Typescript definitions


## [6.1.3] - 2018-09-12
### Fixed
 -  Typescript definitions


## [6.1.0] - 2018-09-09
### Removed
**Methods**
 -  `asyncMapBatch`

**Arguments**
 -  `filler` argument from `zipLongest`, `asyncZipLongest`

### Changed
 -  **All methods:** Object parameters are no longer implicitly treated as iterables, and will throw errors.
 -  **All curried methods:** passing `null` and `undefined` as the iterable will always result in those values being coerced to iterables. Currying happens based on `arguments.length`.
 -  `compose([...fns])` => `compose(...fns)`
 -  `asyncRegexpExecIter` and `asyncRegexpSplitIter` now coerce sync iterables to async iterables, matching behavior of all other async methods.
 -  `regexpExec` now ensures its RegExp parameter is global unless it is already sticky.
 -  `slice` and `asyncSlice` now support negative `start` and `end`.
 
### Deprecated
 -  `iter`, `asyncIter`

### Added
**Methods**
 -  `iterable`, `asyncIterable` (NOTE: These methods are NOT the same as `iter` and `asyncIter`. What they do is exactly the opposite!)
 -  `some`, `asyncSome`
 -  `every`, `asyncEvery`
 -  `tap`, `asyncTap`
 -  `first`, `asyncFirst`,
 -  `takeSorted`, `asyncTakeSorted`
 -  `toArray`, `asyncToArray`
 -  `asyncBuffer`

**Aliases**
 -  `concat` and `asyncConcat` for `chain` and `asyncChain`
 -  `zipAll` and `asyncZipAll` for `zipLongest` and `asyncZipLongest`

**Arguments**
-  [optional] `initial` for `reduce` and `asyncReduce`. If no initial value is specified, the first item will be used.


## [5.0.0] - 2018-06-20
### Added
**Methods**
 -  `keys`, `values`, `entries`
 -  `size`
 -  `find`

### Changed
 -  The behavior of `iter(iter(iterable))` should now be considered undefined.
 -  `asyncZip` and `asyncZipLongest` now run items in parallel

### Fixed
 -  `iter({next: 'foo'})` now returns `Iterator[[next, 'foo']]` not `{next: 'foo'}`. This is particular to objects having any property named next.


## [4.1.0] - 2018-06-12
### Added
**Methods**
 -  `consume`, `asyncConsume`
 -  `batch`, `asyncBatch`, `asyncMapBatch`
 -  `regexpExecIter`, `asyncRegexpExecIter`
 -  `asyncThrottle`

## [4.0.0] - 2018-06-02
### Changed
 -  Changed **the whole way the library is imported.** Very breaking.


### Find earlier history [on GitHub](https://github.com/sithmel/iter-tools/commits/master?before=3c215852eae92417f3ea28ac2abfe56f1cea83fa+35)
