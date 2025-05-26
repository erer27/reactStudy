import {combineReducers} from 'redux';
import foodReducers from './foodReducer';
export default combineReducers({
    foods:foodReducers,
})