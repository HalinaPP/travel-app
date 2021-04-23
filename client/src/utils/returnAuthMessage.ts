import { AuthConstants } from '../constants/auth.constants';
import { ResponseErrorData, ResponseSuccessData } from '../components/Auth/auth.model';

/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types */
export const returnSuccessAuthMessage = (response: ResponseSuccessData, callback: any, lang: string) => {
  if (response.statusText === 'Accepted') {
    callback(AuthConstants.userLogged[lang]);
  } else if (response.statusText === 'Created') {
    callback(AuthConstants.userCreated[lang]);
  }
};
export const returnErrorAuthMessage = (response: ResponseErrorData, callback: any, lang: string) => {
  switch (response.errors.status) {
    case 400:
      callback(AuthConstants.invalidUserData[lang]);
      break;
    case 409:
      callback(AuthConstants.userAlreadyExists[lang]);
      break;
    case 404:
      callback(AuthConstants.notFound[lang]);
      break;
    case 401:
      callback(AuthConstants.unAuthorized[lang]);
      break;
    case 500:
      callback(AuthConstants.internalServerError[lang]);
      break;
    default:
      callback(AuthConstants.unCatchedError[lang]);
  }
};
