import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import AsyncListContainer from './containers/AsyncListContainer'
import reducer from './reducers'
import css from './style/main.css'

const finalStore = applyMiddleware(thunk)(createStore)
const store = finalStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}><AsyncListContainer /></Provider>,
  document.getElementById('root')
);
