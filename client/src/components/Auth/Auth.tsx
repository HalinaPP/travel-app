import './auth.scss';
import React, { FC, useState, useEffect, useContext, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ResponseErrorData, ResponseSuccessData, User } from './auth.model';
import { ValidateDataParams, validateData } from '../../utils/inputsValidation';
import { AuthConstants } from '../../constants/auth.constants';
import { authApi } from '../../utils/apiConnect';
import AvatarUpload from '../AvatarUpload';
import { StateModel } from '../../reducers';
import { setUser } from '../../actions';
import { LanguageContext } from '../../utils/LanguageContext';

import Spinner from '../AvatarUpload/spinner';

const Auth: FC = () => {
  useSelector((state: StateModel) => state.user);
  const dispatch = useDispatch();
  const { lang: currLang } = useContext(LanguageContext);
  const [tab, setTab] = useState<string>(AuthConstants.signIn[currLang]);
  const [nicknameInput, setNicknameInput] = useState<string | null>(null);
  const [passwordInput, setPasswordInput] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [disabledButton, setDisabledButton] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const isSignUp = tab === AuthConstants.signUp[currLang];

  const checkFields = useCallback(([...args]: Array<ValidateDataParams>):Array<string> => {
    const data:Array<string> = [];
    args.forEach((elem: ValidateDataParams) => {
      data.push(validateData(elem));
    });
    return data.filter((el: string) => el !== '');
  }, [nicknameInput, passwordInput, image]);

  useEffect(() => {
    let errorsList;
    if (isSignUp) {
      errorsList = checkFields([
        {
          currentInput: 'nickname',
          value: nicknameInput,
          currLang,
        },
        {
          currentInput: 'password',
          value: passwordInput,
          currLang,
        },
        {
          currentInput: 'avatar',
          value: image,
          currLang,
        }]);
    } else {
      errorsList = checkFields([
        {
          currentInput: 'nickname',
          value: nicknameInput,
          currLang,
        },
        {
          currentInput: 'password',
          value: passwordInput,
          currLang,
        }]);
    }
    const valid = errorsList.length === 0;
    setDisabledButton(!valid);
    setError(errorsList[0]);
  }, [image, nicknameInput, passwordInput]);

  useEffect(() => {
    setNicknameInput(null);
    setPasswordInput(null);
    setImage(null);
    setError(null);
    setSuccess(null);
    setDisabledButton(true);
  }, [tab]);

  // type-guard i need to correctly detect response type
  const isResponseSuccess = (data : ResponseSuccessData | ResponseErrorData):
    data is ResponseSuccessData => Object.prototype.hasOwnProperty.call(data, 'data');

  const onNicknameChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setNicknameInput(value);
  };
  const onPasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setPasswordInput(value);
  };
  const onImageReady = (target: string) => {
    setImage(target);
  };
  const onSuccessLogin = (data: User) => {
    dispatch(setUser(data));
    setNicknameInput(null);
    setPasswordInput(null);
    setTimeout(() => {
      setTab(AuthConstants.signIn[currLang]);
      setSuccess(null);
    }, 1000);
  };

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    if (nicknameInput && passwordInput) {
      formData.append('nickname', nicknameInput);
      formData.append('password', passwordInput);
    }
    return formData;
  };
  const onAuthApiCall = (responseData: ResponseSuccessData | ResponseErrorData) => {
    setLoading(false);
    if (isResponseSuccess(responseData)) {
      if (responseData.statusText === 'Accepted') {
        setSuccess(AuthConstants.userLogged[currLang]);
      } else if (responseData.statusText === 'Created') {
        setSuccess(AuthConstants.userCreated[currLang]);
      }
      const user = responseData.data.data;
      if (user?.nickname) {
        onSuccessLogin(user);
      }
      setError(null);
    } else {
      switch (responseData.errors.status) {
        case 400:
          setError(AuthConstants.invalidUserData[currLang]);
          break;
        case 409:
          setError(AuthConstants.userAlreadyExists[currLang]);
          break;
        case 404:
          setError(AuthConstants.notFound[currLang]);
          break;
        case 401:
          setError(AuthConstants.unAuthorized[currLang]);
          break;
        case 500:
          setError(AuthConstants.internalServerError[currLang]);
          break;
        default:
          setError(AuthConstants.unCatchedError[currLang]);
      }
      setSuccess(null);
    }
  };
  const onSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    const formData = await onFormSubmit(e);
    await authApi.loginUser(formData)
      .then(res => onAuthApiCall(res));
  };

  const onSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    const formData = await onFormSubmit(e);
    if (image) {
      formData.append('avatar', image);
    }
    await authApi.registerUser(formData)
      .then(res => onAuthApiCall(res));
  };

  return (
    <div className="auth__modal close">
      <div className="tabs">
        <button
          className={`sign--up title tab ${tab === AuthConstants.signUp[currLang] ? 'active' : null}`}
          onClick={() => setTab(AuthConstants.signUp[currLang])}
        >
          { AuthConstants.signUp[currLang] }
        </button>
        <button
          className={`sign--in title tab ${tab === AuthConstants.signIn[currLang] ? 'active' : null}`}
          onClick={() => setTab(AuthConstants.signIn[currLang])}
        >
          { AuthConstants.signIn[currLang] }
        </button>
      </div>

      <div className="auth__block">

        <form encType="multipart/form-data"
          onSubmit={ tab === AuthConstants.signUp[currLang] ? onSignUp : onSignIn }
          className="modal-content animate">
          {
            isSignUp ?
              <AvatarUpload onImageReady={ (target) => onImageReady(target) } />
              : null
          }

          <div className="container">
            <label htmlFor="nickname">
              <div className="uname">
                { AuthConstants.nickname[currLang] }
              </div>
            </label>
            <input value={ nicknameInput || ''}
              onChange={ onNicknameChange }
              type="text" name="nickname" required />

            <label htmlFor="password">
              <div className="password">
                { AuthConstants.password[currLang] }
              </div>
            </label>
            <input value={ passwordInput || ''}
              onChange={ onPasswordChange }
              type="password" name="password" required />

            { error ? <div className="error">{error}</div> : null }

            { success ? <div className="success">{success}</div> : null }

            { loading ?
              <Spinner/> :
              <button disabled={disabledButton} type="submit" className="btn">
                {
                  isSignUp ?
                    AuthConstants.signUp[currLang] :
                    AuthConstants.signIn[currLang]
                }
              </button>
            }

          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
