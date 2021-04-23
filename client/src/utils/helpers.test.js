import { countRate, findNickName, decimalize } from './helpers';
import { validateData } from './inputsValidation';

describe('тест функции countRate', () => {
  test('корректно возвращает среднее значение', () => {
    expect(countRate([{ rating: 3 }, { rating: 2 }, { rating: 5 }])).toBe(3.3);
  });
});

describe('тест функции findNickName', () => {
  test('если есть ник - возвращает объект с ником', () => {
    expect(
      findNickName(
        [
          { nickName: 'Vasya', placeId: 'awesomeplace' },
          { nickName: 'Vasya2', placeId: 'TEST' },
          { nickName: 'Vasya2', placeId: 'awesomeplace' },
          { nickName: 'Vasya3', placeId: 'awesomeplace' },
        ],
        'Vasya2',
        'awesomeplace',
      ).nickName,
    ).toBe('Vasya2');
  });
  test('если ника нет - undefine', () => {
    expect(
      findNickName(
        [
          { nickName: 'Vasya', placeId: 'TEST' },
          { nickName: 'Vasya1', placeId: 'TEST' },
          { nickName: 'Vasya2', placeId: 'TEST' },
          { nickName: 'Vasya3', placeId: 'TEST' },
        ],
        'Vasya5',
        'awesomeplace',
      ),
    ).toBeFalsy();
  });
});

describe('тест функции decimalize', () => {
  test('добавляет к однозначному числу 0 впереди, не действует на двузначные числа', () => {
    expect(decimalize(3)).toBe('03');
    expect(decimalize(12)).toBe('12');
    expect(decimalize(0)).toBe('00');
    expect(decimalize(10)).toBe('10');
    expect(decimalize(1)).toBe('01');
  });
});

const testNickname1 = { currentInput: 'nickname', value: 'вася', currLang: 'ru' };
const testNickname2 = { currentInput: 'nickname', value: 'vasya', currLang: 'en' };
const testNickname3 = { currentInput: 'nickname', value: '', currLang: 'bg' };
const testPassword1 = { currentInput: 'password', value: 'выфапыыв', currLang: 'ru' };
const testPassword2 = { currentInput: 'password', value: '123qw', currLang: 'en' };
const testPassword3 = { currentInput: 'password', value: '', currLang: 'bg' };
const testAvatar1 = { currentInput: 'avatar', value: '', currLang: 'ru' };

describe('тест функции validateData', () => {
  test('проверка nickname', () => {
    expect(validateData(testNickname1)).toBe('Допускается использование только цифр и латинских букв');
    expect(validateData(testNickname2)).toBe('The minimum nickname length is 6 characters');
    expect(validateData(testNickname3)).toBe('Не е посочен псевдоним');
  });
  test('проверка password', () => {
    expect(validateData(testPassword1)).toBe('Допускается использование только цифр и латинских букв');
    expect(validateData(testPassword2)).toBe('The minimum password length is 6 characters');
    expect(validateData(testPassword3)).toBe('Не е посочена парола');
  });
  test('проверка avatar', () => {
    expect(validateData(testAvatar1)).toBe('Не загружен аватар');
  });
});
