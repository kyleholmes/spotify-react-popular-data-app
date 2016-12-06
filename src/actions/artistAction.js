import Spotify from 'spotify-web-api-js';
const SpotifyApi = new Spotify();

export function setArtistTokens({accessToken, refreshToken}) {
	if (accessToken) {
		SpotifyApi.setAccessToken(accessToken);
	}
	return {
		type: 'SPOTIFY_TOKENS_ARTISTS', 
		accessToken, 
		refreshToken
	};
}

export function getArtistData(range) {
	return function(dispatch) {
		dispatch({ 
			type: 'SPOTIFY_ARTISTS_BEGIN'
		});
		SpotifyApi.getMyTopArtists({limit: 35, time_range: range}).then(data => {
			dispatch({
				type: 'SPOTIFY_ARTISTS_SUCCESS', 
				data
				});
			}).catch(e => {
				dispatch({
					type: 'SPOTIFY_ARTISTS_FAILURE', 
					error: e
				});
		});
	};
}