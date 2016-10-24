export default {
	request: {
		accessToken: null,
		refreshToken: null,
		choice: null
	},
	artist: {
		accessToken: null,
		refreshToken: null,
		artists: {
			loading: false,
			items: []
		}
	},
	song: {
		accessToken: null,
		refreshToken: null,
		songs: {
			loading: false,
			items: []
		}
	}
};