export function saveToken(token){
	return {
		type: 'TOKEN_API_SAVE',
		token
	};
}