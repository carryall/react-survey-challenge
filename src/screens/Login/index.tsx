import React, { Fragment } from 'react';

import backgroundImage from '../../assets/images/background.png';
import logo from '../../assets/images/logo.svg';
import LoginForm from '../../components/forms/Login';
import Screen from '../../components/Screen';

const Login = (): JSX.Element => {
  return (
    <Screen backgroundImage={backgroundImage} className="login">
      <Fragment>
        <div className="auth-header">
          <img src={logo} className="auth-header__logo app-logo" alt="logo" data-test-id="app-logo" />
          <p className="auth-header__title">Sign in to Nimble</p>
        </div>
        <LoginForm />
      </Fragment>
    </Screen>
  );
};

export default Login;
