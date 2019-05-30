import Utils from './utils';

describe('Utils tests', () => {
  test('removeBlankAttributesFromObject with empty string', () => {
    expect(Utils.removeBlankAttributesFromObject({ aa: 12, bb: '' })).toEqual({ aa: 12 });
  });

  test('removeBlankAttributesFromObject with null', () => {
    expect(Utils.removeBlankAttributesFromObject({ aa: 12, bb: null })).toEqual({ aa: 12 });
  });

  test('removeBlankAttributesFromObject with undefined', () => {
    expect(Utils.removeBlankAttributesFromObject({ aa: 12, bb: undefined })).toEqual({ aa: 12 });
  });

  test('removeBlankAttributesFromObject with empty array required', () => {
    expect(Utils.removeBlankAttributesFromObject({ aa: 12, bb: [] }, true)).toEqual({ aa: 12 });
  });

  test('removeBlankAttributesFromObject with empty object required', () => {
    expect(Utils.removeBlankAttributesFromObject({ aa: 12, bb: {} }, true)).toEqual({ aa: 12 });
  });

  test('removeBlankAttributesFromObject with empty array', () => {
    expect(Utils.removeBlankAttributesFromObject({ aa: 12, bb: [] })).toEqual({ aa: 12, bb: [] });
  });

  test('removeBlankAttributesFromObject with empty object', () => {
    expect(Utils.removeBlankAttributesFromObject({ aa: 12, bb: {} })).toEqual({ aa: 12, bb: {} });
  });

  test('removeBlankAttributesFromObject with 0', () => {
    expect(Utils.removeBlankAttributesFromObject({ aa: 12, bb: 0 })).toEqual({ aa: 12, bb: 0 });
  });


  test('removeBlankAttributesFromObject with array as an input', () => {
    expect(Utils.removeBlankAttributesFromObject([{ aa: 12, bb: '' }])).not.toEqual([{ aa: 12 }]);
  });

  test('removeBlankAttributesFromObject with nested Object as an input', () => {
    expect(Utils.removeBlankAttributesFromObject({ aa: 12, bb: { bb1: undefined, bb2: 67, bb3: '' } })).not.toEqual({ aa: 12, bb: { bb2: 67 } });
  });

  test('isEmptyObject Success Case', () => {
    expect(Utils.isEmptyObject({})).toBe(true);
  });

  test('isEmptyObject Error Case', () => {
    expect(Utils.isEmptyObject({ aa: 12 })).not.toBe(true);
  });

  test('isEmptyObject Success Case for hasOwnProperty', () => {
    const base = { name: 'base name' };
    const child = Object.create(base);
    expect(Utils.isEmptyObject(child)).toBe(true);
  });

  test('isEmptyObject Error Case for hasOwnProperty', () => {
    const base = { name: 'base name' };
    const child = Object.create(base);
    child.age = 12;
    expect(Utils.isEmptyObject(child)).not.toBe(true);
  });

  test('isEmptyArray Success Case', () => {
    expect(Utils.isEmptyArray([])).toBe(true);
  });

  test('isEmptyArray Error Case', () => {
    expect(Utils.isEmptyArray([1, 2])).not.toBe(true);
  });
});
