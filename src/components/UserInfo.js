import React, { Component } from 'react'
import { Row, Col } from 'react-grid-system'
import { Link } from 'react-router'

class UserInfo extends Component {
	render(){
		const { user } = this.props
		const displayName = user ? (user.name || user.login) : ""
		if(user){
			return (
				<div>
					<Row>
						<Col md={12}>
							<h1>{displayName}</h1>
						</Col>
						<Col md={3}>
							<img src={user.avatar_url} alt={displayName} className="user__profile-img" />
						</Col>
						<Col md={6}>
							<span>Public repos: {user.public_repos || 0}</span>
							<br />
							<span>Username: {user.login || ""}</span>
							<br />
							<span>Company: {user.company || "No company"}</span>
							<br />
							<span>Followers: {user.followers || 0}</span>
							<br />
							<span>Following: {user.following || 0}</span>
							<br />
							<a href={user.html_url}>View full profile</a>
						</Col>
						<Col md={3}>
							<Link to={`/users/${user.login}/repos`}>View repos</Link>
						</Col>
					</Row>
				</div>
			)
		}
		return null
	}
}

export default UserInfo