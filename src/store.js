import { createStore ,combineReducers} from 'redux';
import todoReducer from './reducers/todoReducer';
import modalReducer from './reducers/modalReducer';

const rootReducer = combineReducers({
    todo: todoReducer,
    modal:modalReducer
})

const store = createStore(rootReducer);

export default store;
