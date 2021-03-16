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
