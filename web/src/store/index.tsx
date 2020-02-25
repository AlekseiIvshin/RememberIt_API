import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import singUpReducer from '../screens/SignUp/reducer';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
    signUp: singUpReducer,
});
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(sagas)
export default store;

