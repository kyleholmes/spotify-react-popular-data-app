import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import Home from './components/home/homePage';
import About from './components/about/aboutPage';
import Data from './components/songs/dataPage';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="about" component={About} />
		<Route path="data" component={Data} />
	</Route>
);