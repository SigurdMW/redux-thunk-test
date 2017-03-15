import React, { Component } from 'react'
import { Link } from 'react-router'
import { Container } from 'react-grid-system'

class Main extends Component {
	render(){
		return (
			<div>
				<header className="site-header">
					<Container>
						<Link to="/">
							Home
						</Link>
						<ul className="site-header__left-content">
							<li><Link to="/plan">Plan</Link></li>
						</ul>
					</Container>
				</header>
				<Container className="main-content">
					{React.cloneElement(this.props.children, this.props)}
				</Container>
			</div>
		)
	}
}

export default Main