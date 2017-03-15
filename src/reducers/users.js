export function fetchUserDataPending(state = false, action){
	switch(action.type){
		case 'FETCH_USER_DATA_PENDING':
			return action.isLoading
		default:
			return state
	}
}

export function fetchUserDataError(state = false, action){
	switch(action.type){
		case 'FETCH_USER_DATA_ERROR':
			return action.hasError
		default:
			return state
	}
}

export function users(state = {}, action){
	switch(action.type){
		case 'FETCH_USER_DATA_SUCCESS':
			return {
				...state,
				[action.userdata.login]: action.userdata
			}
		default:
			return state
	}
}

export function repos(state = {}, action){
	switch(action.type){
		case 'GET_STARRED_REPOS_SUCCESS':
			return {
				...state,
				[action.username]: action.repos
			}
		case 'FETCH_USER_REPOS_SUCCESS':
			return {
				...state,
				[action.username]: action.repos
			}
		default:
			return state
	}
}