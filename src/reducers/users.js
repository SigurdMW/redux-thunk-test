import { toLowercase, sortArrayByDate } from '../helpers/helpers'

export function fetchDataPending(state = false, action){
	switch(action.type){
		case 'FETCH_USER_DATA_PENDING':
			return action.isLoading
		case 'FETCH_DATA_PENDING':
			return action.isLoading
		default:
			return state
	}
}

export function fetchDataError(state = {hasError: false}, action){
	switch(action.type){
		case 'FETCH_USER_DATA_ERROR':
			return {
				...state,
				hasError: action.hasError,
				error: action.error
			}
		case 'FETCH_DATA_ERROR':
			return {
				...state,
				hasError: action.hasError,
				error: action.error
			}
		default:
			return state
	}
}

export function users(state = {}, action){
	switch(action.type){
		case 'FETCH_USER_DATA_SUCCESS':
			action.userdata.login = toLowercase(action.userdata.login)
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
			const reposSorted = sortArrayByDate("desc", action.repos, "created_at")
			return {
				...state,
				[action.username]: reposSorted
			}
		default:
			return state
	}
}