import React, { Fragment } from 'react'

import backgroundImage from '../../assets/images/background.png'
import logo from '../../assets/images/logo.svg'
import Background from '../../components/Background'
import LoginForm from '../../components/forms/Login'

const Login = (): JSX.Element => {
  return (
    <Background image={backgroundImage}>
      <Fragment>
        <div className="auth-header">
          <img src={logo} className="auth-header__logo app-logo" alt="logo" />
          <p className="auth-header__title">Sign in to Nimble</p>
        </div>
        <LoginForm />
      </Fragment>
    </Background>
  )
}

export default Login
