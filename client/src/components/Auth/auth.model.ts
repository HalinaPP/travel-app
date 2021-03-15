export interface AuthProps {
  smt?: any,
}
export interface AuthData {
  nickname: string,
  password: string,
  id?: number,
}

export interface User {
  id?: number;
  nickname: string;
  avatar: string,
  token: string,
}
