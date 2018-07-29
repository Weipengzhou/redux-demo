import { applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducer';


const sagaMiddleware = createSagaMiddleware();
export default function configureStore() {
    const store = createStore(reducers, applyMiddleware(sagaMiddleware));
     
    return store;
}   