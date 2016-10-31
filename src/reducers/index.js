import {combineReducers} from 'redux';
import songs from './songReducer';
import artists from './artistReducer';
//import request from './requestReducer';

const rootReducer = combineReducers({
	songs,
	artists
	//request
});

export default rootReducer;