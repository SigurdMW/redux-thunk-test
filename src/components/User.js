import React, { Component } from 'react'
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
					(<div className="load-bar">
					  <div className="bar"></div>
					  <div className="bar"></div>
					  <div className="bar"></div>
					</div>)
				}
				<UserInfo user={this.props.users[username]} />
			</div>
		)
	}
}

export default User