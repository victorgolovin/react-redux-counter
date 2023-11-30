import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { counterReducer } from './reducer.js'
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './App.jsx'
import './index.css'



const store = createStore(counterReducer, undefined, composeWithDevTools())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
     <App />
    </Provider>
  </React.StrictMode>
)
