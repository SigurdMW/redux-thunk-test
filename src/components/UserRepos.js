import React, { Component } from 'react'

class UserRepos extends Component {
	handleStarredRepos = () => {
		this.props.getStarredRepos(this.props.user.login)
	}

	render(){
		return (
			<div>User Repos
				<button onClick={this.handleStarredRepos}>Get starred</button>
				{ repos &&
					<h2>{user.login} repos:</h2>
				}
				{ repos &&
					repos.map((item, i) => <li key={i}><a href={item.html_url}>{item.full_name}</a></li>)
				}
			</div>
		)
	}
}

export default UserRepos