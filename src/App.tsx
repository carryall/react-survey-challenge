import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import './assets/stylesheets/application.scss'
import Routes from './routes'

function App(): JSX.Element {
  return (
    <div className="app" data-test-id="app">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  )
}

export default App
