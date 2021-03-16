interface AuthConstantsType {
  [key: string]: {
    [key: string]: string;
  };
}

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
};
