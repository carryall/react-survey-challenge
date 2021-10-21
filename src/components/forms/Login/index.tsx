import React from 'react'

const LoginForm = (): JSX.Element => {
  return (
    <form className="form auth-form form-login">
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input name="email" type="email" className="form-input" />
      </div>
      <div className="form-group">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input name="password" type="password" className="form-input" />
      </div>
      <input type="submit" className="btn form-submit" value="Sign in" />
    </form>
  )
}

export default LoginForm
