import React from 'react'

import { render } from '@testing-library/react'

import LoginForm from './'

const testIDs = {
  signinBtn: 'btn-signin',
  emailField: 'input-email',
  passwordField: 'input-password'
}

describe('LoginForm', () => {
  it('renders sign in button', () => {
    const { getByTestId } = render(<LoginForm />)
    const signinBtn = getByTestId(testIDs.signinBtn)

    expect(signinBtn).toBeInTheDocument()
  })

  it('renders the email field', () => {
    const label = 'Email'
    const { getByText, getByTestId } = render(<LoginForm />)

    expect(getByText(label)).toBeInTheDocument()
    expect(getByTestId(testIDs.emailField)).toBeInTheDocument()
  })

  it('renders the password field', () => {
    const label = 'Password'
    const { getByText, getByTestId } = render(<LoginForm />)

    expect(getByText(label)).toBeInTheDocument()
    expect(getByTestId(testIDs.passwordField)).toBeInTheDocument()
  })
})
