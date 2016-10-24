import React, {PropTypes} from 'react';

const SongList = ({songs}) => {
	let totalPop = 0;
	let hipsterLevel = 0;
	let hipsterLevelText = '';
	let hipsterLink = '';
	songs.map((song) => {
		totalPop+= song.popularity;
		});
	let avgPop = Math.floor(totalPop / 50);
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
		hipsterLevelText = 'nails first stanza of Float On, mysteriuosly dissapears for rest of song';
	}
	else if (avgPop > 40){
		hipsterLevel = 5;
		hipsterLevelText = 'might know 1 or 2 Pavement songs';
	}
	else if (avgPop > 20){
		hipsterLevel = 6;
		hipsterLevelText = 'Dave Franco wearing a beanie';
	}
	else if (avgPop > 0){
		hipsterLevel = 7;
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
						<td><a href={song.external_urls.spotify}>{song.name}</a></td>
						<td>{song.artists[0].name}</td>
						<td>{song.popularity}</td>
					</tr>
				))}
				</tbody>
			</table>
		</div>
		);
};

SongList.propTypes = {
	songs: PropTypes.array.isRequired
};

export default SongList;