import React, {PropTypes} from 'react';

const ArtistList = ({artists}) => {
	let totalPop = 0;
	//let totalFollows = 0;
	let hipsterLevel = 0;
	let hipsterLevelText = '';
	let hipsterLink = '';
	artists.map((artist) => {
		totalPop+= artist.popularity;
		//totalFollows+= artist.followers.total;
		});
	hipsterLevel = 9-(Math.floor(totalPop / artists.length)/10); //Math.floor(totalPop / artists.length) is average popularity
	//let avgFollows = Math.floor(totalFollows / artists.length);
	if (hipsterLevel <= 1){
		hipsterLevelText = '"Ugh they neeeeed to put Taylor Swift on Spotify"';
	}
	else if (hipsterLevel <= 1.5){
		hipsterLevelText = 'listens to "Closer" at least once a day. No, not "Closer" by Nine Inch Nails';
	}
	else if (hipsterLevel <= 2){
		hipsterLevelText = '"I\m really only into Drake\'s old stuff"';
	}
	else if (hipsterLevel <= 3){
		hipsterLevelText = 'tells you their favorite genre is alternative. loves avicii\'s new stuff';
	}
	else if (hipsterLevel <= 4){
		hipsterLevelText = 'knows 25 different cheeses and their appropriate wine pairings';
	}
	else if (hipsterLevel <= 5){
		hipsterLevelText = 'constantly suggests you donate to the National Gallery of Art, never once done it themselves';
	}
	else if (hipsterLevel <= 5.5){
		hipsterLevelText = 'only smokes cigarettes ironically';
	}
	else if (hipsterLevel <= 7){
		hipsterLevelText = 'you conform to no trend. you are a hipster god';
	}
	else if (hipsterLevel <= 8.5) {
		hipsterLevelText = 'where is my son i want answers';
	}
	else {
		hipsterLevelText = 'Loading...';
	}

	return (
		<div>
			<p id="hipster">Hipster Level: <span id={'level'+Math.ceil(hipsterLevel)}>{hipsterLevelText}</span></p>
			<table className="table table-sm table-borderless">
				<caption>Your Top Artists</caption>
				<thead className="thead-inverse">
					<tr>
						<th className="col-md-1">&nbsp;</th>
						<th className="col-md-5">Artist</th>
						<th className="col-md-3">Followers{/*(Avg: {avgFollows})*/}</th>
						<th className="col-md-3">Popularity <span className="smaller">(Avg: {Math.floor(totalPop / artists.length)})</span></th>
					</tr>
				</thead>
				<tbody>
				{artists.map((artist) => (
					<tr className="data" id={'backgroundlevel' + Math.round(9-(artist.popularity/10))} key={artist.id}>
						<td className="col-md-1">&nbsp;</td>
						<td className="col-md-5"><a className="list-hyperlink" href={artist.external_urls.spotify}>{artist.name}</a></td>
						<td className="col-md-3">{artist.followers.total}</td>
						<td className="col-md-3">{artist.popularity}</td>
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