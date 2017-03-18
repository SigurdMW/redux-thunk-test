import React, { Component } from 'react'
import { Container } from 'react-grid-system'

class ErrorMessage extends Component {
	render(){
		const { error } = this.props
		if(error.hasError){
			const errorMessage = (error.error && error.error.message !== undefined) ? error.error.message : "No error provided"
			return (
				<div className="error-message">
					<Container>
						<p>Something went wrong. Error: { errorMessage }</p>
					</Container>
				</div>
			)
		}
		return null
	}
}

export default ErrorMessage