import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import AsyncListContainer from './containers/AsyncListContainer'
import { Provider } from 'react-redux'

const initState = {
    isLoading:true,
    selectedFilter:'',
    data:[]
}
const reducer = (state=initState, action) => {
    console.log("Reducer was called with state ", state, " and action ", action)
    switch(action.type){
        case 'REQUEST_MEDALS':
            return Object.assign({}, state,{
                data: action.data,
                isLoading: action.isLoading,
                selectedFilter: action.selectedFilter
            })
        case 'RECEIVE_MEDALS':
            return Object.assign({},state,{
                data: action.data,
                isLoading: action.isLoading,
                selectedFilter: action.selectedFilter
            })
        default:
            return state
    }
}

const finalStore = applyMiddleware(thunk)(createStore)
const store = finalStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}><AsyncListContainer /></Provider>,
  document.getElementById('root')
);
