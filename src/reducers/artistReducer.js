import initialState from './initialState';

export default function artistReducer(state = initialState.artist, action) {
	switch (action.type) {
		case 'SPOTIFY_TOKENS_ARTISTS':
			return Object.assign({}, state, action);

		case 'SPOTIFY_ARTISTS_BEGIN':
			return Object.assign({}, state, {
				artists: Object.assign({}, state.artists, {loading: true})
			});

		case 'SPOTIFY_ARTISTS_SUCCESS':
			return Object.assign({}, state, {
				artists: Object.assign({}, state.artists, action.data, {loading: false})
			});

		case 'SPOTIFY_ARTISTS_FAILURE':
			return state;

		default:
			return state;
	}
}