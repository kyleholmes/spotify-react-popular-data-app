import React, {PropTypes} from 'react';

const ArtistList = ({artists}) => {
	let totalPop = 0;
	let totalFollows = 0;
	let hipsterLevel = 0;
	let hipsterLevelText = '';
	let hipsterLink = '';
	artists.map((artist) => {
		totalPop+= artist.popularity;
		totalFollows+= artist.followers.total;
		});
	let avgPop = Math.floor(totalPop / 25);
	let avgFollows = Math.floor(totalFollows / 25);
	if (avgPop > 90){
		hipsterLevel = 1;
		hipsterLevelText = '"Ugh they neeeeed to put Taylor Swift on Spotify"';
	}
	else if (avgPop > 85){
		hipsterLevel = 2;
		hipsterLevelText = 'listens to "Closer" at least once a day. No, not "Closer" by Nine Inch Nails';
	}
	else if (avgPop > 80){
		hipsterLevel = 3;
		hipsterLevelText = '"I\m really only into Drake\'s old stuff"';
	}
	else if (avgPop > 70){
		hipsterLevel = 4;
		hipsterLevelText = 'tells you their favorite genre is alternative. loves avicii\'s new stuff';
	}
	else if (avgPop > 65){
		hipsterLevel = 5;
		hipsterLevelText = 'knows 25 different cheeses and their appropriate wine pairings';
	}
	else if (avgPop > 60){
		hipsterLevel = 6;
		hipsterLevelText = 'constantly suggests you donate to the National Gallery of Art, never once done it themselves';
	}
	else if (avgPop > 50){
		hipsterLevel = 7;
		hipsterLevelText = 'only smokes cigarettes ironically';
	}
	else if (avgPop > 40){
		hipsterLevel = 8;
		hipsterLevelText = 'you conform to no trend. you are a hipster god';
	}
	else if (avgPop > 0) {
		hipsterLevel = 8;
		hipsterLevelText = 'where is my son i want answers';
	}
	else {
		hipsterLevel = 9;
		hipsterLevelText = 'Your Token has expired. Please return to the home page and enter it again.';
	}

	return (
		<div>
			<p id="hipster">Hipster Level: <span id={'level'+hipsterLevel}>{hipsterLevelText}</span></p>
			<table className="table">
				<caption>Your Top Artists</caption>
				<thead>
					<tr>
						<th>&nbsp;</th>
						<th>Artist</th>
						<th>Followers (Avg: {avgFollows})</th>
						<th>Popularity (Avg: {avgPop})</th>
					</tr>
				</thead>
				<tbody>
				{artists.map((artist) => (
					<tr key={artist.id}>
						<td>&nbsp;</td>
						<td><a href={artist.external_urls.spotify}>{artist.name}</a></td>
						<td>{artist.followers.total}</td>
						<td>{artist.popularity}</td>
					</tr>
				))}
				</tbody>
			</table>
		</div>
		);
};

ArtistList.propTypes = {
	artists: PropTypes.array.isRequired
};

export default ArtistList;