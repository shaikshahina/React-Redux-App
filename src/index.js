import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware,compose, combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux';
import productsReducer from './reducers/productsReducer';
import userReducer from './reducers/userReducer';
import thunk from 'redux-thunk'




const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
})

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
)

const store = createStore(allReducers,
  {
  products: [{name: 'iphone'}],
  user: 'ashika'},
  allStoreEnhancers
);

// console.log('Initial State ', store.getState())

// const updateUserAction = {
//   type: 'updateUserAction',
//   payload: {
//     user: 'Ayan'
//   }
// };
// store.dispatch(updateUserAction)


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <App aRandomProps = "whatever" />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
