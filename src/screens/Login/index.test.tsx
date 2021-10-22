import React from 'react';

import { render } from '@testing-library/react';

import LoginScreen from './';

const testIDs = {
  appLogo: 'app-logo'
};

describe('LoginScreen', () => {
  it('renders logo', () => {
    const { getByTestId } = render(<LoginScreen />);
    const appLogo = getByTestId(testIDs.appLogo);

    expect(appLogo).toBeInTheDocument();
  });

  it('renders the title', () => {
    const title = 'Sign in to Nimble';
    const { getByText } = render(<LoginScreen />);

    expect(getByText(title)).toBeInTheDocument();
  });
});
