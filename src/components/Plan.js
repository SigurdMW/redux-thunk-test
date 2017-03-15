import React, { Component } from 'react'

class Plan extends React.Component {
	render(){
		return (
			<div>
				<h1>Plan</h1>
				<p>Create a simple GitHub app to explore users and their repos.</p>
				<p>To do:</p>
				<ul>
					<li className="checked">Import a simple grid system</li>
					<li>Plan the app content:
						<ol>
							<li className="checked">Find users by username</li>
							<li>Create a page for that user containing:
								<ul>
									<li className="checked">Profile pic</li>
									<li className="checked">Name</li>
									<li className="checked">Username</li>
									<li>Stats</li>
									<li className="checked">Repos</li>
								</ul>
							</li>
							<li>Create paths to repos for that user:
								<ul>
									<li>It should be possible to to a "deep dive" in a single repo</li>
									<li>each repo page should have its own URL</li>
								</ul>
							</li>
						</ol>
					</li>
					<li>Technical stuff:
						<ul>
							<li>The pages should be accessible on repload</li>
							<li>Maintain accessibility as good as possible</li>
							<li>The app should have a basecamp-like loading indicator</li>
						</ul>
					</li>
					<li>Next phase:
						<ul>
							<li>Sort the repos correctly (newest first)</li>
						</ul>
					</li>
				</ul>
			</div>
		)
	}
}

export default Plan