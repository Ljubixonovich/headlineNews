import { 
  createStore, 
  combineReducers, 
  compose, 
  applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import testReducer from './reducers/testReducer';

const rootReducer = combineReducers({
  test: testReducer,
});


let composeEnchancers = compose;
if (__DEV__) {
  composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  || compose;
}

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  return createStore(rootReducer, {},
    composeEnchancers(applyMiddleware(sagaMiddleware)))
};

const store = configureStore();

sagaMiddleware.run(rootSaga);

export default store;
