import './auth.scss';
import React, { FC, useState } from 'react';

const Auth: FC = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  function closeModal() {
    console.log('modal close');
  }
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
        <form className="modal-content animate" action="/" method="post">
          {!isSignIn ? <a href="#" className="set-avatar"></a> : <div className="user-avatar"></div>}

          <div className="container">
            <label htmlFor="uname">
              <div className="uname">Name</div>
            </label>
            <input type="text" name="uname" required />

            <label htmlFor="psw">
              <div className="password">Password</div>
            </label>
            <input type="password" name="psw" required />

            <button type="submit" className="btn">
              sign up
            </button>
            {/* нужна ли нам возможность сохранять состояние "в системе"? по идее так и делают */}
            {/* <label>
                <input type="checkbox" checked={true} name="remember" /> Remember me
              </label> */}
          </div>
          {/* надо или удалить с концами? */}
          {/* <div className="container">
              <span className="psw">
                Forgot <a href="#">password?</a>
              </span>
            </div> */}
        </form>
      </div>
    </div>
  );
};

export default Auth;
