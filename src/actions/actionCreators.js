export function fetchUserDataSuccess(userdata) {
    return {
        type: 'FETCH_USER_DATA_SUCCESS',
        userdata
    };
}

export function fetchUserDataPending(bool){
	return {
		type: 'FETCH_USER_DATA_PENDING',
		isLoading: bool
	}
}

export function fetchUserDataError(bool){
	return { 
		type: 'FETCH_USER_DATA_ERROR',
		hasError: bool
	}
}

export function fetchUserData(username){
	return (dispatch) => {
	  dispatch(fetchUserDataPending(true));
	  fetch(`https://api.github.com/users/${username}`)
	    .then((response) => {
	        if (!response.ok) {
	            throw Error(response.statusText);
	        }
	        dispatch(fetchUserDataPending(false));
	        return response;
	    })
	    .then((response) => response.json())
	    .then((items) => dispatch(fetchUserDataSuccess(items)))
	    .catch(() => dispatch(fetchUserDataError(true)));
	}
}


export function fetchUserReposSuccess (repos, username) {
	return {
		type: 'FETCH_USER_REPOS_SUCCESS',
		repos,
		username
	}
}

export function fetchUserRepos(username){
	return (dispatch) => {
	  //dispatch(fetchUserDataPending(true));
	  fetch(`https://api.github.com/users/${username}/repos`)
	    .then((response) => {
	        if (!response.ok) {
	            throw Error(response.statusText);
	        }
	        //dispatch(fetchUserDataPending(false));
	        return response;
	    })
	    .then((response) => response.json())
	    .then((items) => dispatch(fetchUserReposSuccess(items, username)))
	    //.catch(() => dispatch(fetchUserDataError(true)));
	}
}

export function getStarredReposSuccess (repos, username) {
	return {
		type: 'GET_STARRED_REPOS_SUCCESS',
		repos,
		username
	}
}

export function getStarredRepos(username){
	return (dispatch) => {
	  //dispatch(fetchUserDataPending(true));
	  fetch(`https://api.github.com/users/${username}/starred`)
	    .then((response) => {
	        if (!response.ok) {
	            throw Error(response.statusText);
	        }
	        //dispatch(fetchUserDataPending(false));
	        return response;
	    })
	    .then((response) => response.json())
	    .then((items) => dispatch(getStarredReposSuccess(items, username)))
	    //.catch(() => dispatch(fetchUserDataError(true)));
	}
}