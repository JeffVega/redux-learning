import counterReducer from './counter';
import {combineReducers} from 'redux';
import urlData from './url';

const allReducers = combineReducers({
    counter:counterReducer,
    urlData
})

export default allReducers;