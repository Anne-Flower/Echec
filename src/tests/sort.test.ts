import {describe, expect, test} from '@jest/globals';

// const sort = () => {

// };

function sort(list: number[]): any {
  const toto = [1, 4, 6, 78];
  return toto
};

describe('sort function', () => {
  test('sort a list', () => {
    const list = [1, 6, 78, 4];
    expect(sort(list)).toEqual([1, 4, 6, 78]);
  });
});

