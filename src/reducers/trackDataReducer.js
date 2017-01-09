import initialState from './initialState';

export default function trackDataReducer(state = initialState.trackData, action) {
	switch (action.type) {

		case 'SPOTIFY_TRACKDATA_BEGIN':
			return Object.assign({}, state);

		case 'SPOTIFY_TRACKDATA_SUCCESS':
			return Object.assign({}, state, {
				audio_features: Object.assign({}, action.data2.audio_features)
			});

		case 'SPOTIFY_TRACKDATA_FAILURE':
			return state;

		default:
			return state;
	}
}