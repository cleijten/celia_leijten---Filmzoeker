import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import allReducers from './reducers'; //je hoeft hier geen index.js in te zetten, want dat is de default die wordt aangeroepen
import { Provider } from 'react-redux'; //verbind store met <App />

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())






ReactDOM.render(
  
    <Provider store={store}>
    <App />
    </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



//onderstaande wordt verdeeld naar verschillende componenten
// //STORE

// //ACTION INCREMENT
// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   }
// }

// const decrement = () => {
//   return {
//     type: 'DECREMENT'
//   }
// }

// //REDUCER which action you did and based on that change data in the store
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1
//     case "DECREMENT":
//       return state - 1
//   }
// }

// let store = createStore(counter)

// //display console

// store.subscribe(() => console.log(store.getState()))

// //DISPATCH execute action, send to reducer

// store.dispatch(increment())

