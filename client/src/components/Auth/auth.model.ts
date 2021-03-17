export interface AuthProps {
  closeAuthModal: () => void,
}
export interface AuthData {
  nickname: string,
  password: string,
  avatar?: File | string,
  id?: number,
}
export interface ResponseErrorData {
  errors: {
    detail: string,
    error: string,
    path: string,
    status: number,
  }
}
export interface ResponseSuccessData {
  data: {
    message: string,
    data?: User
  },
  error: null,
  statusText: string
}
export interface User {
  nickname: string;
  avatar: string,
  token: string,
}
