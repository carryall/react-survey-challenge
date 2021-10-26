import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AuthContextProvider } from './contexts/auth';
import './assets/stylesheets/application.scss';
import Routes from './routes';

function App(): JSX.Element {
  return (
    <AuthContextProvider>
      <div className="app" data-test-id="app">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    </AuthContextProvider>
  );
}

export default App;
