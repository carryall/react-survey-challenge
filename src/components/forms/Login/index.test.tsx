import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import LoginForm from './';

const testIDs = {
  signinBtn: 'btn-signin',
  emailField: 'input-email',
  passwordField: 'input-password'
};

const errorMessages = {
  emailRequired: 'Email is a required field',
  emailInvalidType: 'Email must be a valid email',
  passwordRequired: 'Password is a required field'
};

describe('LoginForm', () => {
  it('renders sign in button', () => {
    render(<LoginForm />);
    const signinBtn = screen.getByTestId(testIDs.signinBtn);

    expect(signinBtn).toBeVisible();
  });

  it('renders the email field', () => {
    render(<LoginForm />);
    const label = 'Email';
    const emailField = screen.getByTestId(testIDs.emailField);

    expect(screen.getByText(label)).toBeVisible();
    expect(emailField).toBeVisible();
    expect(emailField).toHaveAttribute('type', 'email');
  });

  it('renders the password field', () => {
    render(<LoginForm />);
    const label = 'Password';
    const passwordField = screen.getByTestId(testIDs.passwordField);

    expect(screen.getByText(label)).toBeVisible();
    expect(passwordField).toBeVisible();
    expect(passwordField).toHaveAttribute('type', 'password');
  });

  describe('Validation', () => {
    it('displays required errors when value is invalid', async () => {
      render(<LoginForm />);
      const signinBtn = screen.getByTestId(testIDs.signinBtn);

      fireEvent.click(signinBtn);

      expect(await screen.findAllByRole('alert')).toHaveLength(2);
      expect(screen.getByText(errorMessages.emailRequired)).toBeVisible();
      expect(screen.getByText(errorMessages.passwordRequired)).toBeVisible();
    });

    it('displays invalid email type error when email is invalid', async () => {
      render(<LoginForm />);
      const signinBtn = screen.getByTestId(testIDs.signinBtn);
      const emailField = screen.getByTestId(testIDs.emailField);
      const passwordField = screen.getByTestId(testIDs.passwordField);

      fireEvent.input(emailField, { target: { value: 'invalid email' } });
      fireEvent.input(passwordField, { target: { value: 'password' } });
      fireEvent.click(signinBtn);

      expect(await screen.findAllByRole('alert')).toHaveLength(1);
      expect(screen.getByText(errorMessages.emailInvalidType)).toBeVisible();
    });
  });
});
