import { countRate, findNickName } from './helpers';

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
          { nickName: 'Vasya' },
          { nickName: 'Vasya1' },
          { nickName: 'Vasya2' },
          { nickName: 'Vasya3' },
        ],
        'Vasya2',
      ).nickName,
    ).toBe('Vasya2');
  });
  test('если ника нет - undefine', () => {
    expect(
      findNickName(
        [
          { nickName: 'Vasya' },
          { nickName: 'Vasya1' },
          { nickName: 'Vasya2' },
          { nickName: 'Vasya3' },
        ],
        'Vasya5',
      ),
    ).toBeFalsy();
  });
});
