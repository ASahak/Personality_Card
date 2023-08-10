import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createInjectorsEnhancer } from 'redux-injectors';
import { createReducer } from './rootReducer';
import rootSaga from './rootSaga';

let store;
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const sagaMiddleware = createSagaMiddleware();
const { run: runSaga } = sagaMiddleware;

const enhancers = [
  applyMiddleware(sagaMiddleware),
  createInjectorsEnhancer({
    createReducer,
    runSaga,
  }),
];
store = createStore(
  createReducer,
  composeEnhancers(...enhancers),
);

store.sagaTask = runSaga(rootSaga);

export {
  store,
}