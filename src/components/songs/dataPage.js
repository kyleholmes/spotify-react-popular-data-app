import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setSongTokens, getSongData} from '../../actions/songAction';
import SongList from './songList';
import {setArtistTokens, getArtistData} from '../../actions/artistAction';
import ArtistList from './artistList';
import SelectInput from '../common/selectInput';
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
	}

	@autobind
	changeSongTerm(event) {
		const {dispatch, params} = this.props;
		dispatch(getSongData(event.target.value));
	}

	@autobind
	changeArtistTerm(event) {
		const {dispatch, params} = this.props;
		dispatch(getArtistData(event.target.value));
	}

	render() {
		const songs = this.props.songs.songs.items;
		const artists = this.props.artists.artists.items;
		return (
			<div>
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
			</div>
		);
	}
}

export default connect(state => state)(Data);