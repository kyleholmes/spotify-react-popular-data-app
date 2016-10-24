import React, {Component, PropTypes} from 'react';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import UserForm from './userForm';
import {saveToken} from '../../actions/requestAction';

class Home extends React.Component{

	constructor(props,context) {
		super(props, context);
		this.state = {
			request: Object.assign({}, this.props.request)
		};
		this.updateRequestState = this.updateRequestState.bind(this);
		this.saveRequest = this.saveRequest = this.saveRequest.bind(this);
	}

	updateRequestState(event) {
		const field = event.target.name;
		let request = this.state.request;
		request[field] = event.target.value;
		return this.setState({request: request});
	}

	saveRequest(event) {
		event.preventDefault();
		const {dispatch, params} = this.props;
		const token = this.state.request.token;
		dispatch(saveToken(token));
		browserHistory.push('/data');
	}

	render() {
		return (
			<div>
				<div className="jumbotron">
					<h1>Spotify Popular Music Data</h1>
					<h3>Find out your most popular songs or artists.</h3>
					<h6>(Also check out how much of a <span id="homeHipster">hipster</span> you really are)</h6>
				</div>
				<div>
					<UserForm request={this.state.request} onChange={this.updateRequestState} onSave={this.saveRequest} />
				</div>
			</div>
		);
	}
}

Home.propTypes = {
	request: PropTypes.object.isRequired
};

export default connect(state=> state)(Home);