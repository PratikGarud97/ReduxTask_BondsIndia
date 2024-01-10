import { createStore } from 'redux';
import rootReducer from './Reducer/operation';

const store = createStore(rootReducer);


export default store;