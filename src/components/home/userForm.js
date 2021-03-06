import React from 'react';
import TextInput from '../common/textInput';

const UserForm = ({request, onChange, onSave}) => {
	return (
		<form id="access">
			<h2>To access your data, we'll first need your access token</h2>
			<h5>(You may need to login at some point)</h5>
			<h4><span>1. </span>Follow <a href="https://developer.spotify.com/web-api/console/get-current-user-top-artists-and-tracks/" target="_blank">this link</a>, scroll down and click the green button that says "Get Oauth Token".</h4>
			<h4><span>2. </span>Check the top box (user-top-read) in the pop-up and click the "Request Token" button.</h4>
			<h4><span>3. </span>Copy and paste the ENTIRE token into the box below (they're rather lengthy).</h4>
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