import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { 
	users, 
	fetchUserDataPending,
	fetchUserDataError,
	repos
} from './users'

const rootReducer = combineReducers({
	users,
	isLoading: fetchUserDataPending,
	hasError: fetchUserDataError,
	userRepos: repos,
	routing: routerReducer,
})

export default rootReducer