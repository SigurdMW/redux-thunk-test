import React, { Component } from 'react'
import LoadingBar from './LoadingBar'
import UserInfo from './UserInfo'

class User extends Component {
	componentDidMount(){
		// if no user info in store, create it
		if(!this.props.users[this.props.params.username]){
			this.props.fetchUserData(this.props.params.username)
		}
	}
	render(){
		const { username } = this.props.params
		return (
			<div>
				{this.props.isLoading && 
					<LoadingBar />
				}
				<UserInfo user={this.props.users[username]} />
			</div>
		)
	}
}

export default User