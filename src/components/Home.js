import React, { Component } from 'react'
import { Link } from 'react-router'

class Home extends Component {
	constructor(){
		super()
		this.state = {
			username: ""
		}
	}

	setUsername = (e) => {
		this.setState({username: e.target.value})
	}

	handleSearch = (e) => {
		e.preventDefault()
		this.props.fetchUserData(this.state.username)
		this.props.router.push(`/users/${this.state.username}`)
	}

	render(){
		return (
			<div>
				<h1>Home</h1>
				<form onSubmit={this.handleSearch}>
					<label htmlFor="search">Search user</label>
					<input type="text" id="search" onChange={this.setUsername} value={this.state.username} />
					<button type="submit">Search</button>
				</form>
				<h2>Mest søkt</h2>
				<Link to="/users/SigurdMW">Sigurd</Link>
				<br />
				<Link to="/users/tommyno">Tommy</Link>
			</div>
		)
	}
}

export default Home