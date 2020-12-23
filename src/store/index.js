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

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  return createStore(rootReducer, {},
    composeEnchancers(applyMiddleware(sagaMiddleware)))
};

const store = configureStore();

sagaMiddleware.run(rootSaga);

export default store;
