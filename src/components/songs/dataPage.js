import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setSongTokens, getSongData} from '../../actions/songAction';
import SongList from './songList';
import {setArtistTokens, getArtistData} from '../../actions/artistAction';
import ArtistList from './artistList';

class Data extends React.Component{

	componentDidMount() {
		const uri = document.location.href.toString();
		const accessToken = uri.substring(uri.indexOf("token=") + 6, uri.indexOf("&token"));
		const {dispatch, params} = this.props;
		const refreshToken = 'hi';
		dispatch(setSongTokens({accessToken, refreshToken}));
		dispatch(getSongData());
		dispatch(setArtistTokens({accessToken, refreshToken}));
		dispatch(getArtistData());
	}

	render() {
		const songs = this.props.songs.songs.items;
		const artists = this.props.artists.artists.items;
		return (
			<div>
				<div id="table1">
					<h1>Songs</h1>
					<SongList songs={songs} />
				</div>
				<div id="table2">
					<h1>Artists</h1>
					<ArtistList artists={artists} />
				</div>
			</div>
		);
	}
}

export default connect(state => state)(Data);