import initialState from './initialState';

export default function songReducer(state = initialState.song, action) {
	switch (action.type) {
		case 'SPOTIFY_TOKENS_SONGS':
			return Object.assign({}, state, action);

		case 'SPOTIFY_SONGS_BEGIN':
			return Object.assign({}, state, {
				songs: Object.assign({}, state.songs, {loading: true})
			});

		case 'SPOTIFY_SONGS_SUCCESS':
			return Object.assign({}, state, {
				songs: Object.assign({}, state.songs, action.data, {loading: false})
			});

		case 'SPOTIFY_SONGS_FAILURE':
			//console.log('06');
			return state;

		default:
			return state;
	}
}