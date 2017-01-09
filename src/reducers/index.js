import {combineReducers} from 'redux';
import songs from './songReducer';
import artists from './artistReducer';
import trackData from './trackDataReducer';
//import request from './requestReducer';

const rootReducer = combineReducers({
	songs,
	artists,
	trackData
	//request
});

export default rootReducer;