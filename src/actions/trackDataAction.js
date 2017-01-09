import Spotify from 'spotify-web-api-js';
const SpotifyApi = new Spotify();

function dataSmash(data, key) {
	var smash = [];
	data.map((i) => {
		smash.push(i[key]);
	});
	return smash.toString();
}


export function getTrackData(range) {
	return function(dispatch) {
		dispatch({ 
			type: 'SPOTIFY_TRACKDATA_BEGIN'
		});
		SpotifyApi.getMyTopTracks({limit: 50, time_range: range}).then(data => {
			console.log(data);
			console.log('dataSmash result:');
			console.log(dataSmash(data.items, 'id'));
			SpotifyApi.getAudioFeaturesForTracks(dataSmash(data.items, 'id')).then(data2 => {
				console.log('data2');
				console.log(data2);
				dispatch({
					type: 'SPOTIFY_TRACKDATA_SUCCESS', 
					data2
					});
				}).catch(e => {
					dispatch({
						type: 'SPOTIFY_TRACKDATA_FAILURE', 
						error: e
					});
				});
		});
	};
}