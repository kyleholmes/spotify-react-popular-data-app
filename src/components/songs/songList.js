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
	hipsterLevel = 9-(Math.floor(totalPop / songs.length)/10); //Math.floor(totalPop / songs.length) is average popularity
	if (hipsterLevel <= 1){
		hipsterLevelText = 'frequent radio listener';
	}
	else if (hipsterLevel <= 2){
		hipsterLevelText = '"Jack White? Who\'s that?"';
	}
	else if (hipsterLevel <= 3){
		hipsterLevelText = 'goes to a Strokes concert but can only sing along to "Last Nite" and "Reptillia"';
	}
	else if (hipsterLevel <= 4){
		hipsterLevelText = 'favorite genre: post-industrial psychodelic alternative grunge poetry';
	}
	else if (hipsterLevel <= 4.5){
		hipsterLevelText = 'thinks Nuetral Milk Hotel is the most revolutionary band of the past millenium';
	}
	else if (hipsterLevel <= 5){
		hipsterLevelText = 'finds pleasure in telling others their favorite band is "soOoooOoOOO cliché"';
	}
	else if (hipsterLevel <= 6){
		hipsterLevelText = 'Dave Franco wearing a beanie';
	}
	else if (hipsterLevel <= 7.5){
		hipsterLevelText = 'who is this and how did you get here';
	}
	else {
		hipsterLevelText = 'Loading...';
	}


	return (
		<div>
			<p id="hipster">Hipster Level: <span id={'level'+Math.ceil(hipsterLevel)}>{hipsterLevelText}</span></p>
			<table className="table table-sm table-borderless">
				<caption>Your Top Songs</caption>
				<thead className="thead-inverse">
					<tr>
						<th className="col-md-1">&nbsp;</th>
						<th className="col-md-4">Song</th>
						<th className="col-md-4">Artist</th>
						<th className="col-md-3">Popularity <span className="smaller">(Avg: {Math.floor(totalPop / songs.length)})</span></th>
					</tr>
				</thead>
				<tbody>
				{songs.map((song) => (
					<tr className="data" id={'backgroundlevel' + Math.round(9-(song.popularity/10))} key={song.id}>
						<td className="col-md-1">&nbsp;</td>
						<td className="col-md-4"><a className="list-hyperlink" href={song.external_urls.spotify}>{song.name} </a>{/*<a href={song.preview_url} target="_blank"><span className="glyphicon glyphicon-play-circle"></span></a>*/}</td>
						<td className="col-md-4">{song.artists[0].name}</td>
						<td className="col-md-3">{song.popularity}</td>
					</tr>
				))}
				</tbody>
			</table>
			<div id="playlist">
				{/*<p><span id={'level'+hipsterLevel}>Top tracks playlist:</span></p>*/}
				<iframe src={"https://embed.spotify.com/?uri=spotify:trackset:TOPTRACKS:" + playlistBuilder} frameBorder="0" allowTransparency="true"></iframe>
			</div>
		</div>
		);
};

SongList.propTypes = {
	songs: PropTypes.array.isRequired
};

export default SongList;