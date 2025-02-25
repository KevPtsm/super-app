import { createStore, combineReducers } from 'redux';
import { counterReducer } from './reducers/counter';
import { todoReducer } from './reducers/todo';


const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});

const store = createStore(rootReducer);

export default store;