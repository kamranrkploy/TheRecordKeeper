import {combineReducers} from 'redux';
import notesReducer from './notesReducer';
import notesRedcers from './notesReducer';

const rootReducer = combineReducers({
    notes : notesReducer
});