import initialState from './initialState';

export default function requestReducer(state = initialState, action) {
	switch (action.type) {
		case 'TOKEN_API_SAVE':
			return Object.assign({}, state, {
				request: Object.assign({}, {accessToken: action.token})
			});
		case 'TOKEN_API_FAILURE':
			return state;
		default:
			return state;
	}
}