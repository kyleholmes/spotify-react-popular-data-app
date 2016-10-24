import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setSongTokens, getSongData} from '../../actions/songAction';
import SongList from './songList';
import {setArtistTokens, getArtistData} from '../../actions/artistAction';
import ArtistList from './artistList';

class Data extends React.Component{

	componentDidMount() {
		const {dispatch, params} = this.props;
		const accessToken = this.props.request.request.accessToken;
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
				<h1>Songs</h1>
				<SongList songs={songs} />
				<h1>Artists</h1>
				<ArtistList artists={artists} />
			</div>
		);
	}
}

export default connect(state => state)(Data);