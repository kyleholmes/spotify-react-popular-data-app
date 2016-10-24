import React from 'react';
import TextInput from '../common/textInput';

const UserForm = ({request, onChange, onSave}) => {
	return (
		<form id="access">
			<h2>To access your data, we'll first need your access token</h2>
			<h4><span>1. </span>Follow <a href="https://developer.spotify.com/web-api/console/get-current-user-top-artists-and-tracks/" target="_blank">this link</a> and click the "Get Oauth Token" button.</h4>
			<h4><span>2. </span>Check the top box in the pop-up and click the "Request Token" button.</h4>
			<h4><span>3. </span>Copy and paste the token into the box below.</h4>
			<TextInput name="token" label="Enter Token" value={request.accessToken} onChange={onChange} />
			<input type="submit" className="btn btn-primary" value="Get Data" onClick={onSave} />
		</form>
			);
};

UserForm.propTypes = {
	request: React.PropTypes.object.isRequired,
	onChange: React.PropTypes.func.isRequired,
	onSave: React.PropTypes.func
};

export default UserForm;