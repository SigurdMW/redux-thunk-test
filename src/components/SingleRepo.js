import React, { Component } from 'react'

class SingleRepo extends Component {
	componentDidMount(){
		if(!this.props.repos || !this.props.repos[this.props.params.username]){
			this.props.fetchUserRepos(this.props.params.username)
		}
	}
	render(){
		const { repos } = this.props
		const { username, reponame } = this.props.params
		const userRepos = repos[username]
		var repo = {}
		if(userRepos){
			repo = userRepos.filter(item => item.name == reponame)
			repo = repo[0]
		}

		if(repo.name){
			return (
				<div>
					<h1>{repo.name}</h1>
					<p>{repo.description || "No description"}</p>
					<span className="prog-lan">{repo.language || "No language specified"}</span>
					{repo.private === false ? (<span>Public repo</span>) : (<span>Private repo</span>)}
				</div>
			)	
		}
		return null
	}
}

export default SingleRepo