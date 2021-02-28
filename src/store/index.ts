import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './ducks/rootSaga';
import reducerCurrency from './ducks/currency';
import reducerUser from './ducks/users';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware
]

const createRootReducer = () => combineReducers({
  currency: reducerCurrency,
  users: reducerUser
})

const store = createStore(createRootReducer(), composeWithDevTools(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga)

export { store };