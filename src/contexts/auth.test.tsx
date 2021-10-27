import React, { useContext } from 'react';

import { render, fireEvent } from '@testing-library/react';

import { AuthContext, AuthContextProvider } from './auth';

const TestConsumer = (): JSX.Element => {
  const { state, dispatch } = useContext(AuthContext);
  let message = '';

  if (state.isAuthenticated) {
    message = 'User is authenticated';
  } else {
    message = 'User is not authenticated';
  }

  const updateState = () => {
    dispatch({
      type: 'UPDATE',
      payload: {
        attributes: {
          /* eslint-disable camelcase */
          access_token: 'access-token',
          refresh_token: 'refresh-token',
          token_type: 'Bearer',
          expires_in: 100
          /* eslint-enable camelcase */
        }
      }
    });
  };

  return (
    <div data-test-id="test-message">
      {message}
      <button onClick={updateState} data-test-id="test-button">
        Update State
      </button>
    </div>
  );
};

describe('AuthContextProvider', () => {
  it('provides default state', () => {
    const { getByTestId } = render(
      <AuthContextProvider>
        <TestConsumer></TestConsumer>
      </AuthContextProvider>
    );

    const testMessage = getByTestId('test-message');

    expect(testMessage.textContent).toContain('User is not authenticated');
  });
});

describe('AuthContext', () => {
  it('provides default state', () => {
    const sampleDispatch = () => null;
    const { getByTestId } = render(
      <AuthContext.Provider value={{ state: { isAuthenticated: false }, dispatch: sampleDispatch }}>
        <TestConsumer></TestConsumer>
      </AuthContext.Provider>
    );

    const testMessage = getByTestId('test-message');

    expect(testMessage.textContent).toContain('User is not authenticated');
  });

  it('provides dispatch event to update state', () => {
    const sampleDispatch = jest.fn();
    const { getByTestId } = render(
      <AuthContext.Provider value={{ state: { isAuthenticated: false }, dispatch: sampleDispatch }}>
        <TestConsumer></TestConsumer>
      </AuthContext.Provider>
    );

    const dispatchBtn = getByTestId('test-button');
    fireEvent.click(dispatchBtn);

    expect(sampleDispatch).toHaveBeenCalled();
  });
});
