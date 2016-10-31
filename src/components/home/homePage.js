import React, {Component, PropTypes} from 'react';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';

export default class Home extends React.Component{

	render() {
		return (
			<div>
				<div className="jumbotron">
					<h1>Spotify Popular Music Data</h1>
					<h3>Find out your most popular songs or artists.</h3>
					<h6>(Also check out how much of a <span id="homeHipster">hipster</span> you really are)</h6>
				</div>
				<div>
					<a href="https://accounts.spotify.com/authorize?client_id=702364bcb0a245eba1749ead655eb270&redirect_uri=http:%2F%2Flocalhost:3000%2Fdata&scope=user-top-read&response_type=token" className="btn btn-info">Login & Get Data</a>
					{/*<UserForm request={this.state.request} onChange={this.updateRequestState} onSave={this.saveRequest} />*/}
				</div>
			</div>
		);
	}
}