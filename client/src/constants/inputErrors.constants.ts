interface LangErrors {
  [key: string]: {
    [key: string]: string;
  };
}
export const InputErrors: LangErrors = {
  noImage: {
    ru: 'Не загружен аватар',
    en: 'Avatar is not uploaded',
    bg: 'Аватарът не е зареден',
  },
  noNickname: {
    ru: 'Не указан никнейм',
    en: 'Nickname is not provided',
    bg: 'Не е посочен псевдоним',
  },
  noPassword: {
    ru: 'Не указан пароль',
    en: 'Password is not provided',
    bg: 'Не е посочена парола',
  },
  minPassword: {
    ru: 'Минимальная длина пароля - 6 символов',
    en: 'The minimum password length is 6 characters',
    bg: 'Минималната дължина на паролата е 6 знака',
  },
  minNickname: {
    ru: 'Минимальная длина никнейма - 6 символов',
    en: 'The minimum nickname length is 6 characters',
    bg: 'Минимална дължина на псевдонима - 6 знака',
  },
  nonLatinCharacters: {
    ru: 'Допускается использование только цифр и латинских букв',
    en: 'Only numbers and Latin letters are allowed',
    bg: 'Разрешени са само цифри и латински букви',
  },
};
