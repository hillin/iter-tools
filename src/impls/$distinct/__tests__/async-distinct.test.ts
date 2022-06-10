/**
 * @generated-from ./$distinct.test.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncDistinct } from 'iter-tools-es';
import { asyncWrap, asyncUnwrap } from '../../../test/async-helpers';

describe('asyncDistinct', () => {
  describe('when source is empty', () => {
    it('yields no values', async () => {
      expect(await asyncUnwrap(asyncDistinct(null))).toEqual([]);
      expect(await asyncUnwrap(asyncDistinct(undefined))).toEqual([]);
      expect(await asyncUnwrap(asyncDistinct(asyncWrap([])))).toEqual([]);
    });
  });

  describe('when source has values', () => {
    it('only yield distinct values', async () => {
      expect(
        await asyncUnwrap(asyncDistinct(asyncWrap([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8]))),
      ).toEqual([3, 1, 4, 5, 9, 2, 6, 8]);
    });
  });

  describe('when source has values and a selector is specified', () => {
    it('only yield distinct values based on the selector', async () => {
      expect(
        await asyncUnwrap(
          asyncDistinct(
            (item) => item.content,
            asyncWrap([
              {
                content: 'lorem',
              },
              {
                content: 'ipsum',
              },
              {
                content: 'dolor',
              },
              {
                content: 'ipsum',
              },
              {
                content: 'sit',
              },
            ]),
          ),
        ),
      ).toEqual([
        {
          content: 'lorem',
        },
        {
          content: 'ipsum',
        },
        {
          content: 'dolor',
        },
        {
          content: 'sit',
        },
      ]);
    });
  });
});
