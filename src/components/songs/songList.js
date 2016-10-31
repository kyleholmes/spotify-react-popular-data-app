import React, {PropTypes} from 'react';

const SongList = ({songs}) => {
	let totalPop = 0;
	let hipsterLevel = 0;
	let hipsterLevelText = '';
	let hipsterLink = '';
	let playlistBuilder = "";
	songs.map((song) => {
		totalPop+= song.popularity;
		playlistBuilder+= song.id+",";
		});
	let avgPop = Math.floor(totalPop / songs.length);
	if (avgPop > 80){
		hipsterLevel = 1;
		hipsterLevelText = 'frequent radio listener';
	}
	else if (avgPop > 70){
		hipsterLevel = 2;
		hipsterLevelText = '"Jack White? Who\'s that?"';
	}
	else if (avgPop > 60){
		hipsterLevel = 3;
		hipsterLevelText = 'goes to a Strokes concert but can only sing along to "Last Nite" and "Reptillia"';
	}
	else if (avgPop > 50){
		hipsterLevel = 4;
		hipsterLevelText = 'favorite genre: post-industrial psychodelic alternative grunge poetry';
	}
	else if (avgPop > 45){
		hipsterLevel = 5;
		hipsterLevelText = 'thinks Nuetral Milk Hotel is the most revolutionary band of the past millenium';
	}
	else if (avgPop > 40){
		hipsterLevel = 6;
		hipsterLevelText = 'finds pleasure in telling others their favorite band is "soOoooOoOOO cliché"';
	}
	else if (avgPop > 20){
		hipsterLevel = 7;
		hipsterLevelText = 'Dave Franco wearing a beanie';
	}
	else if (avgPop > 0){
		hipsterLevel = 8;
		hipsterLevelText = 'who is this and how did you get here';
	}
	else {
		hipsterLevel = 9;
		hipsterLevelText = 'Your Token has expired. Please return to the home page and enter it again.';
	}


	return (
		<div>
			<p id="hipster">Hipster Level: <span id={'level'+hipsterLevel}>{hipsterLevelText}</span></p>
			<table className="table">
				<caption>Your Top Songs</caption>
				<thead>
					<tr>
						<th>&nbsp;</th>
						<th>Song</th>
						<th>Artist</th>
						<th>Popularity (Avg: {avgPop})</th>
					</tr>
				</thead>
				<tbody>
				{songs.map((song) => (
					<tr key={song.id}>
						<td>&nbsp;</td>
						<td><a href={song.external_urls.spotify}>{song.name} </a><a href={song.preview_url} target="_blank"><span className="glyphicon glyphicon-play-circle"></span></a></td>
						<td>{song.artists[0].name}</td>
						<td>{song.popularity}</td>
					</tr>
				))}
				</tbody>
			</table>
			<p><span id={'level'+hipsterLevel}>Top tracks playlist:</span></p>
			<iframe src={"https://embed.spotify.com/?uri=spotify:trackset:TOPTRACKS:" + playlistBuilder} width="400" height= "480" frameBorder="0" allowTransparency="true"></iframe>
		</div>
		);
};

SongList.propTypes = {
	songs: PropTypes.array.isRequired
};

export default SongList;