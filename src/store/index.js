import { createStore, compose, applyMiddleware } from 'redux';
import createSaga from 'redux-saga';

import rootReducers from './ducks';
import rootSagas from './sagas';

const sagaMiddleware = createSaga();
const reduxStore = createStore(
  rootReducers,
  compose(
    applyMiddleware(sagaMiddleware)
  )
)

export default reduxStore;

sagaMiddleware.run(rootSagas)