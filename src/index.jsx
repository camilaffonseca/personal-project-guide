import React from 'react'

import 'react-app-polyfill/ie9'
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import ReactDOM from 'react-dom'
import App from './App'

import 'sanitize.css'
import 'sanitize.css/forms.css'
import 'sanitize.css/typography.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
