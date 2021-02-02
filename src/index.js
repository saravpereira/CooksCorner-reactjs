import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import App from './App';
import recipeBlogReducer from "./store/reducers/recipeBlog"
import recipeFormReducer from "./store/reducers/recipeForm"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    recipeBlog: recipeBlogReducer,
    recipeForm: recipeFormReducer
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
  
)

ReactDOM.render(
  app,
  document.getElementById('root')
);

