import './auth.scss';
import React, { FC, useState, useEffect, useContext, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ResponseErrorData, ResponseSuccessData, User } from './auth.model';
import { authApi } from '../../utils/apiConnect';
import AvatarUpload from '../AvatarUpload';
import { StateModel } from '../../reducers';
import { setUser } from '../../actions';
import { Context } from '../../utils/Context';
import { validateData } from '../../utils/inputsValidation';
import Spinner from '../AvatarUpload/spinner';

const Auth: FC = () => {
  useSelector((state: StateModel) => state.user);
  const dispatch = useDispatch();
  const { lang: currLang } = useContext(Context);
  const [tab, setTab] = useState<string>('signin');
  const [nicknameInput, setNicknameInput] = useState<string | null>(null);
  const [passwordInput, setPasswordInput] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [disabledButton, setDisabledButton] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const checkFields = ([...args]) => args.every(el => el);

  useEffect(() => {
    if (!error) {
      if (tab === 'signin') {
        if (checkFields([nicknameInput, passwordInput])) {
          setDisabledButton(false);
        } else {
          setDisabledButton(true);
        }
      } else if (tab === 'signup') {
        if (checkFields([nicknameInput, passwordInput, image])) {
          setDisabledButton(false);
        } else {
          setDisabledButton(true);
        }
      }
    } else {
      setDisabledButton(true);
    }
  }, [error, tab]);

  // type-guard i need to correctly detect response type
  const isResponseSuccess = (data : ResponseSuccessData | ResponseErrorData):
    data is ResponseSuccessData => Object.prototype.hasOwnProperty.call(data, 'data');

  const onNicknameChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setNicknameInput(value);
    const errorMessage = validateData({
      currentInput: 'nickname',
      value,
      currLang,
    });
    setError(errorMessage);
  };
  const onPasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setPasswordInput(value);
    const errorMessage = validateData({
      currentInput: 'password',
      value,
      currLang,
    });
    setError(errorMessage);
  };
  const onImageReady = (target: File) => {
    setImage(target);
  };
  const onSuccessLogin = (data: User) => {
    dispatch(setUser(data));
    setNicknameInput('');
    setPasswordInput('');
    setTimeout(() => {
      setTab('signin');
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
      setSuccess(responseData.data.message);
      const user = responseData.data.data;
      if (user?.nickname) {
        onSuccessLogin(user);
      }
      setError(null);
    } else {
      setError(responseData.errors.detail);
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
          className={`sign--up title tab ${tab === 'signup' ? 'active' : null}`}
          onClick={() => {
            setTab('signup');
          }}
        >
          Sign up
        </button>
        <button
          className={`sign--in title tab ${tab === 'signin' ? 'active' : null}`}
          onClick={() => {
            setTab('signin');
          }}
        >
          Sign in
        </button>
      </div>

      <div className="auth__block">

        <form encType="multipart/form-data"
          onSubmit={ tab === 'signup' ? onSignUp : onSignIn }
          className="modal-content animate">
          {
            tab === 'signup' ?
              <AvatarUpload onImageReady={ (target) => onImageReady(target) } />
              : null
          }

          <div className="container">
            <label htmlFor="nickname">
              <div className="uname">Name</div>
            </label>
            <input value={ nicknameInput || ''}
              onChange={ onNicknameChange }
              type="text" name="nickname" required />

            <label htmlFor="password">
              <div className="password">Password</div>
            </label>
            <input value={ passwordInput || ''}
              onChange={ onPasswordChange }
              type="password" name="password" required />

            { error ? <div className="error">{error}</div> : null }

            { success ? <div className="success">{success}</div> : null }

            { loading ?
              <Spinner/> :
              <button disabled={disabledButton} type="submit" className="btn">
                {tab === 'signin' ? 'sign in' : 'sign up'}
              </button>
            }

          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
