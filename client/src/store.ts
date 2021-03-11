import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer, initialState } from './reducers/index';

const localStorageState = localStorage.getItem('travelApp131-state');
console.log('lo=', localStorageState);
const currState = localStorageState ? JSON.parse(localStorageState) : initialState;
console.log('curr', currState);

export const store = createStore(reducer, currState, compose(applyMiddleware(thunk)));
// const store = createStore(reducer, currState);

store.subscribe(() => { localStorage.setItem('travelApp131-state', JSON.stringify(store.getState())); });

export default store;
