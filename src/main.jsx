import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { counterReducer } from './pages/counter/reducer.js'
import { composeWithDevTools } from 'redux-devtools-extension'
import './index.css'
import CounterPage from './pages/counter/CounterPage.jsx'

const rootReducer = combineReducers({
  counter: counterReducer
})

const store = createStore(rootReducer, undefined, composeWithDevTools())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
     <CounterPage />
    </Provider>
  </React.StrictMode>
)
