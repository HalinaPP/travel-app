interface AuthConstantsType {
  [key: string]: {
    [key: string]: string;
  };
}
export const MinInputLength = 6;
export const AuthConstants: AuthConstantsType = {
  signIn: {
    ru: 'Войти',
    en: 'Sign in',
    bg: 'Влизам',
  },
  signUp: {
    ru: 'Зарегистрироваться',
    en: 'Sign up',
    bg: 'Регистрирай се',
  },
  nickname: {
    ru: 'Никнейм',
    en: 'Nickname',
    bg: 'псевдоним',
  },
  password: {
    ru: 'Пароль',
    en: 'Password',
    bg: 'Парола',
  },
  userCreated: {
    ru: 'Пользователь создан!',
    en: 'User created!',
    bg: 'Потребителят е създаден!',
  },
  userLogged: {
    ru: 'Успешная авторизация!',
    en: 'Authorisation success!',
    bg: 'Успешно упълномощаване!',
  },
  userAlreadyExists: {
    ru: 'Пользователь уже существует',
    en: 'User already exists',
    bg: 'Вече съществува потребител',
  },
  invalidUserData: {
    ru: 'Невалидные данные',
    en: 'Invalid data provided',
    bg: 'Невалидни данни',
  },
  notFound: {
    ru: 'Пользователя не существует',
    en: 'User does not exists',
    bg: 'Потребителят не съществува',
  },
  unAuthorized: {
    ru: 'Неверный пароль',
    en: 'Wrong password',
    bg: 'Невалидна парола',
  },
  internalServerError: {
    ru: 'Внутренняя ошибка сервера',
    en: 'Internal server error',
    bg: 'Вътрешна сървърна грешка',
  },
  unCatchedError: {
    ru: 'Что-то пошло не так, попробуйте еще раз',
    en: 'Something went wrong, try again',
    bg: 'Нещо се обърка.Моля опитайте отново',
  },
};
