import React, { Component } from 'react'
import { Row, Col } from 'react-grid-system'
import { Link } from 'react-router'

// Components
import LoadingBar from './LoadingBar'

class Repos extends Component {
	componentDidMount(){
		this.props.fetchUserRepos(this.props.params.username)
	}
	renderRepos = (repo, i) => {
		return (
			<Col md={6} key={i}>
				<div className="card">
					<h2>
						<Link to={`/users/${this.props.params.username}/repos/${repo.name}`}>
							{repo.name}
						</Link>
					</h2>
					{repo.description &&
						<p>{repo.description}</p>
					}
					<div>
						{repo.language &&
							<span className="prog-lan">{repo.language}</span>
						}
						<span className="issues">Open issues: {repo.open_issues_count || 0}</span>
					</div>
				</div>
			</Col>
		)
	}
	render(){
		const repos = this.props.repos[this.props.params.username]
		const hasRepos = (repos && repos.length > 0) ? true : false
		return (
			<div>
				{this.props.isLoading &&
					<LoadingBar />
				}
				<h1>Repos for {this.props.params.username}</h1>
				<Row>	
					{hasRepos ?
						repos.map(this.renderRepos) :
						(<Col md={12}>Obs, {this.props.params.username} doesn't have any repos yet!</Col>)
					}
				</Row>
			</div>
		)
	}
}

export default Repos