import React, { Component } from 'react'

class LoadingBar extends Component {
	render(){
		return (
			<div className="load-bar">
			  <div className="bar"></div>
			  <div className="bar"></div>
			  <div className="bar"></div>
			</div>
		)
	}
}

export default LoadingBar