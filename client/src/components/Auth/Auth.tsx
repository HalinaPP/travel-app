import './auth.scss';
import React, { FC, useState } from 'react';
import { AuthData } from './auth.model';
import { authApi } from '../../utils/apiConnect';
import AvatarUpload from '../AvatarUpload';

const Auth: FC = () => {
  const [tab, setTab] = useState('signin');
  const [nicknameInput, setNicknameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [image, setImage] = useState<File | string>('');

  const showErrors = (data: any) => <div className="error">{data.detail}</div>;
  const showSuccess = (data: any) => <div className="success">{data.message}</div>;

  const onImageReady = (target: File) => {
    setImage(target);
  };
  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('nickname', nicknameInput);
    formData.append('password', passwordInput);
    if (tab !== 'signin') {
      formData.append('avatar', image);
    }
    let responseData;
    if (tab === 'signin') {
      responseData = await authApi.loginUser(formData);
    } else if (tab === 'signup') {
      responseData = await authApi.registerUser(formData);
    }
    if (responseData.errors) {
      setError(responseData.errors);
      setSuccess(false);
    } else {
      setSuccess(responseData.data);
      setError(false);
    }
  };

  return (
    <div className="auth__modal">
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
          onSubmit={ onFormSubmit }
          className="modal-content animate">
          {
            tab === 'signup' ?
              <AvatarUpload onImageReady={ (target) => onImageReady(target) } />
              : <div className="user-avatar"/>
          }

          <div className="container">
            <label htmlFor="nickname">
              <div className="uname">Name</div>
            </label>
            <input onChange={(e) => setNicknameInput(e.target.value)}
              type="text" name="nickname" required />

            <label htmlFor="password">
              <div className="password">Password</div>
            </label>
            <input onChange={(e) => setPasswordInput(e.target.value)}
              type="password" name="password" required />

            { error ? showErrors(error) : null }
            { success ? showSuccess(success) : null }

            <button type="submit" className="btn">
              sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
