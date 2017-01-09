import React, {PropTypes} from 'react';

const TrackData = ({tracks, songs}) => {
	let trackMapping = [];
	tracks.forEach((track) => {
		songs.map((song) => {
			if (song.id == track.id){
				let keyArray = ['C','C#','D','Eb','E','F','F#','G','G#','A','Bb','B'];
				trackMapping.push({
					id: track.id, 
					name: song.name, 
					duration: Math.floor(track.duration_ms/1000/60) + ":" + (Math.round(track.duration_ms/1000 % 60) > 10 ? Math.round(track.duration_ms/1000 % 60) : "0" + Math.round(track.duration_ms/1000 % 60)),
					danceability: track.danceability, 
					energy: track.energy,
					key: keyArray[track.key],
					loudness: track.loudness,
					speechiness: track.speechiness,
					acousticness: track.acousticness,
					time_signature: track.time_signature,
					liveness: track.liveness,
					valence: track.valence,
					tempo: track.tempo,
					longBoy: track.duration_ms > 360000 ? 'longBoy' : '',
					spicyBoy: track.time_signature != 4 ? 'spicyBoy' : '',
					badBoy: (track.energy > .75 && track.valence < .4) ? 'badBoy' : '',
					back: track.duration_ms > 360000 ? 1 + (track.time_signature != 4 ? 2 + ((track.energy > .75 && track.valence < .4) ? 4 : 0) : 0 + (track.energy > .75 && track.valence < .4) ? 4 : 0) : 0 + (track.time_signature != 4 ? 2 + ((track.energy > .75 && track.valence < .4) ? 4 : 0) : 0 + (track.energy > .75 && track.valence < .4) ? 4 : 0)
					});
			}
		});
	});

	return(
			<div>
				<table className="table table-sm table-borderless">
					<caption>Your Top Songs</caption>
					<thead className="thead-inverse">
						<tr>
							<th className="col-md-2">name</th>
							<th className="col-md-1">duration</th>
							<th className="col-md-1">tempo</th>
							<th className="col-md-1">key</th>
							<th className="col-md-1">time</th>
							<th className="col-md-1">energy</th>
							<th className="col-md-1">loudness</th>
							<th className="col-md-1">speechiness</th>
							<th className="col-md-1">acousticness</th>
							<th className="col-md-1">liveness</th>
							<th className="col-md-1">valence</th>
						</tr>
					</thead>
					<tbody>
					{trackMapping.map((track) => (
						<tr className={'trackBack' + track.back} key={track.id}>
							<th className="col-md-2">{track.name}</th>
							<th className={'col-md-1 ' + track.longBoy}>{track.duration}</th>
							<th className="col-md-1">{track.tempo}</th>
							<th className="col-md-1">{track.key}</th>
							<th className={'col-md-1 ' + track.spicyBoy}>{track.time_signature}</th>
							<th className={'col-md-1 ' + track.badBoy}>{track.energy}</th>
							<th className="col-md-1">{track.loudness}</th>
							<th className="col-md-1">{track.speechiness}</th>
							<th className="col-md-1">{track.acousticness}</th>
							<th className="col-md-1">{track.liveness}</th>
							<th className={'col-md-1 ' + track.badBoy}>{track.valence}</th>
						</tr>
					))}
					</tbody>
				</table>
			</div>
		);
};

export default TrackData;