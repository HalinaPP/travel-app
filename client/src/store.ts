import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer, initialState } from './reducers/index';

const localStorageState = localStorage.getItem('travelApp131-state');
const currState = localStorageState ? JSON.parse(localStorageState) : initialState;

export const store = createStore(reducer, currState, compose(applyMiddleware(thunk)));

store.subscribe(() => {
  localStorage.setItem('travelApp131-state', JSON.stringify(store.getState()));
});

export default store;
