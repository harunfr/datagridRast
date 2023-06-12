import React from 'react'
import ReactDOM from 'react-dom/client'
import 'devextreme/dist/css/dx.light.css'
import './assets/styles/index.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
