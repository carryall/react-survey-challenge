import React from 'react'

import backgroundImage from '../../assets/images/background.png'
import Background from '../../components/Background'
import LoginForm from '../../components/forms/Login'

const Login = (): JSX.Element => {
  return (
    <Background image={backgroundImage}>
      <LoginForm />
    </Background>
  )
}

export default Login
