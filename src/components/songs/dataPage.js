import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setSongTokens, getSongData} from '../../actions/songAction';
import SongList from './songList';
import {setArtistTokens, getArtistData} from '../../actions/artistAction';
import ArtistList from './artistList';
import SelectInput from '../common/selectInput';
import TrackData from './trackData';
import {getTrackData} from '../../actions/trackDataAction';
import { autobind } from 'core-decorators';

class Data extends React.Component{

	componentDidMount() {
		const uri = document.location.href.toString();
		const accessToken = uri.substring(uri.indexOf("token=") + 6, uri.indexOf("&token"));
		const {dispatch, params} = this.props;
		const refreshToken = 'hi';
		dispatch(setSongTokens({accessToken, refreshToken}));
		dispatch(getSongData('medium_term'));
		dispatch(setArtistTokens({accessToken, refreshToken}));
		dispatch(getArtistData('medium_term'));
		dispatch(getTrackData('medium_term'));
	}

	@autobind
	changeSongTerm(event) {
		const {dispatch, params} = this.props;
		dispatch(getSongData(event.target.value));
		dispatch(getTrackData(event.target.value));
		console.log(this.props.trackData.audio_features);
	}

	@autobind
	changeArtistTerm(event) {
		const {dispatch, params} = this.props;
		dispatch(getArtistData(event.target.value));
	}

	@autobind
	convertToArray(obj) {
		var arr = [];
		for (var i =0; i< Object.keys(obj).length; i++) {
			arr.push(obj[i]);
		}
		return arr;
	}

	render() {
		const songs = this.props.songs.songs.items;
		const artists = this.props.artists.artists.items;
		const tracks = this.convertToArray(this.props.trackData.audio_features);
		return (
			<div>
				<div id="colorReference">
					<div id="spectrum"></div>
					<span className="smaller">Mainstream&nbsp;</span>&rarr;<span className="smaller">&nbsp;Hipster</span>
				</div>
				<div id="table1">
					<h1>Songs</h1>
					<SelectInput name="timeRange" label="Time Range" value={this.props.songs.songs.timeRange} onChange={this.changeSongTerm}/>
					<SongList songs={songs} />
				</div>
				<div id="table2">
					<h1>Artists</h1>
					<SelectInput name="timeRange" label="Time Range" value={this.props.artists.artists.timeRange} onChange={this.changeArtistTerm}/>
					<ArtistList artists={artists} />
				</div>
				<div id="table3">
					<h1>Tracks <span className="smaller">(and whether it's a <span className="badBoy">bad</span> boy, <span className="longBoy">long</span> boy,or <span className="spicyBoy">spicy</span> boy)</span></h1>
					<TrackData songs={songs} tracks={tracks} />
				</div>
			</div>
		);
	}
}

export default connect(state => state)(Data);