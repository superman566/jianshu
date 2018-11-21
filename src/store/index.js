import { createStore, compose } from 'redux';
import reducer from './reducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,  composeEnhancers());

// const store = createStore(reducer);

export default store;
