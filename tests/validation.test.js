const { validateData: isExist } = require('../common/validation/isExist.validation');
const validateId = require('../common/validation/objectID.validation');

describe('тест функции isExist', () => {
  test('возвращает true если все элементы есть и не пустые', () => {
    expect(isExist(10, true, 'test')).toBeTruthy();
    expect(isExist(5, 'string', true)).toBe(true);
  });
  test('возвращает false, если хотя бы один элемент пустой или отсутствует', () => {
    expect(isExist(10, undefined, 'test')).toBeFalsy();
    expect(isExist(10, '', 'test')).toBeFalsy();
    expect(isExist(10, 'string', false)).toBe(false);
  });
});

describe('тест функции validateId', () => {
  test('возвращает true если id валидно', () => {
    expect(validateId('604c91bcd16ff03e6d7ae274', 'country')).toBeTruthy();
  });
});
