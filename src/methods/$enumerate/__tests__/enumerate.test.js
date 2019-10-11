/**
 * @generated-from ./$enumerate.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { enumerate, toArray, range } from '../../..';
describe('enumerate', () => {
  it('enumerates iterables', () => {
    const iter = enumerate(
      range({
        start: 1,
        end: 4,
      }),
    );
    expect(toArray(iter)).toEqual([[0, 1], [1, 2], [2, 3]]);
  });
  it('enumerates iterables with start', () => {
    const iter = enumerate(
      3,
      range({
        start: 1,
        end: 4,
      }),
    );
    expect(toArray(iter)).toEqual([[3, 1], [4, 2], [5, 3]]);
  });
});
