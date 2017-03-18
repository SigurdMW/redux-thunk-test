import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { 
	users, 
	fetchDataPending,
	fetchDataError,
	repos
} from './users'

const rootReducer = combineReducers({
	users,
	isLoading: fetchDataPending,
	error: fetchDataError,
	userRepos: repos,
	routing: routerReducer,
})

export default rootReducer