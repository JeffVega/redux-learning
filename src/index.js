import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, createStore,compose} from 'redux';
import {Provider} from 'react-redux';


import allReducers from './reducers/index';
import Main from './components/main';
import thunk from 'redux-thunk';
import UrlMainPage from './components/urlMainPage';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(allReducers,composeEnhancer(applyMiddleware(thunk)))
ReactDOM.render(
 
  <Provider store={store}>

  <React.StrictMode>
  <UrlMainPage/>
  </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);


// // ACTIONS
// const increment = (num) =>{
//   return {
//     type:"INCREMENT",
//     payload:num
//   }
// }

// const decrement = () =>{
//   return {
//     type:"DECREMENT"
//   }
// }

// const counter = (state = 0 ,action) =>{
// // state = 1
//   switch(action.type){
//     case "INCREMENT":
//       return state + action.payload;

//     case "DECREMENT":
//       return state - 1;
//       default:
//         return state
//   }

// }

// let store = createStore(counter)
// let store2 = createStore(counter)
// store.subscribe(() => console.log(store.getState()))
// store.dispatch(increment(5))
// store.dispatch(increment())
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
