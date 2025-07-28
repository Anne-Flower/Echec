import {describe, expect, test} from '@jest/globals';

// function sort(list: number[]): any {
//   const toto = [1, 4, 6, 78];
//   return toto
// };

function sort(list: number[]): any {
  let newArray: number[] = [];
  
  for(let i = 0; i < list.length; i++) {
    let nbInserted = false;
    for(let j = 0; j < newArray.length; j++) {
      if (list[i] < newArray[j]) {
        newArray.splice(j, 0, list[i]);
        nbInserted = true;
        break;
      }
    }
    if (!nbInserted) {
      newArray.push(list[i])
    }
  }
  return newArray;
};

describe('sort function', () => {
  test('sort a list', () => {
    const list = [1, 6, 78, 4];
    expect(sort(list)).toEqual([1, 4, 6, 78]);
  });

  test('sort an orderd list', () => {
    const list = [1, 6, 78, 4];
    expect(sort(list)).toEqual([1, 4, 6, 78]);
  });
});

