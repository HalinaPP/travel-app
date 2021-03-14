import './auth.scss';
import React, { FC, useState } from 'react';
import { AuthData } from './auth.model';
import { authApi } from '../../utils/apiConnect';

const sendRequest = (data: AuthData, method: string) => {

};
const Auth: FC = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [nicknameInput, setNicknameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { nickname: nicknameInput, password: passwordInput };
    console.log(JSON.stringify(data));
    fetch('http://localhost:3005/auth/register', {
      method: 'POST',
      body: JSON.stringify((data)),
    }).then((res) => alert(res.status)).then(res => console.log(res)).catch(err => console.error(err));
  };

  return (
    <div className="auth__modal">
      <div className="tabs">
        <button
          className="sign--up title tab active"
          onClick={() => {
            setIsSignIn(false);
          }}
        >
          Sign up
        </button>
        <button
          className="sign--in tab title"
          onClick={() => {
            setIsSignIn(true);
          }}
        >
          Sign in
        </button>
      </div>

      <div className="auth__block">
        <form onSubmit={ onFormSubmit }
          className="modal-content animate">
          {!isSignIn ? <a href="#" className="set-avatar"></a> : <div className="user-avatar"></div>}

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
