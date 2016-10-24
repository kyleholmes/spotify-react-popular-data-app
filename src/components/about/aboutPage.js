import React from 'react';
import {Link} from 'react-router';

export default class About extends React.Component{
	render() {
		return (
			<div id="about">
				<h1>About</h1>
				<p>This app allows you to see some data about your favorite songs and artists the <span>Spotify</span> app won't show you, but exists within their api.</p>
				<p>More features to come.</p>
			</div>
		);
	}
}