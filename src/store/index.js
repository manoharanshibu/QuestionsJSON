import { createStore, combineReducers } from 'redux';
import { reducers } from '../reducers/reducers';
 
const store = createStore(
    combineReducers({
        state: reducers
    })
)