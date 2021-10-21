import React from 'react'

import errorIcon from '../../../assets/images/icons/error.svg'

const LoginForm = (): JSX.Element => {
  return (
    <form className="form auth-form form-login">
      <div className="notification form-error">
        <img src={errorIcon} className="notification__icon icon" alt="logo" />
        <ul className="notification__detail form-error__list">
          <li className="form-error__list-item">Email can’t be blank</li>
          <li className="form-error__list-item">Password can’t be blank</li>
        </ul>
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input name="email" type="email" className="form-input" data-testid="input-email" />
      </div>
      <div className="form-group">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input name="password" type="password" className="form-input" data-testid="input-password" />
      </div>
      <input type="submit" className="btn form-submit" value="Sign in" data-testid="btn-signin" />
    </form>
  )
}

export default LoginForm
