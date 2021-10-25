import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders app', () => {
    const { getByTestId } = render(<App />);
    const app = getByTestId('app');

    expect(app).toBeInTheDocument();
  });
});
