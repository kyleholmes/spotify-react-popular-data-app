import Spotify from 'spotify-web-api-js';
const SpotifyApi = new Spotify();

export function setSongTokens({accessToken, refreshToken}) {
	if (accessToken) {
		SpotifyApi.setAccessToken(accessToken);
	}
	return {
		type: 'SPOTIFY_TOKENS_SONGS', 
		accessToken, 
		refreshToken
	};
}

export function getSongData(range) {
	return function(dispatch) {
		dispatch({ 
			type: 'SPOTIFY_SONGS_BEGIN'
		});
		SpotifyApi.getMyTopTracks({limit: 50, time_range: range}).then(data => {
			dispatch({
				type: 'SPOTIFY_SONGS_SUCCESS', 
				data
				});
			}).catch(e => {
				dispatch({
					type: 'SPOTIFY_SONGS_FAILURE', 
					error: e
				});
		});
	};
}