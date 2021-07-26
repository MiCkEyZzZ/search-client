import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import 'react-toastify/dist/ReactToastify.css'

import App from './App'

import store from './store/store'

const app = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

ReactDOM.render(app, document.getElementById('root'))
