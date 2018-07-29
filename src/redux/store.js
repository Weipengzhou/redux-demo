import { applyMiddleware, createStore} from 'redux';
import reducers from './reducer';

export default function configureStore() {
    const store = createStore(reducers, applyMiddleware());
     
    return store;
}   