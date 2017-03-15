import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import './index.css'
import { Provider } from 'react-redux'
import store, { history } from './store'

// components
import App from './components/App'
import Home from './components/Home'
import PageNotFound from './components/PageNotFound'
import Plan from './components/Plan'
import User from './components/User'
import Repos from './components/Repos'
import SingleRepo from './components/SingleRepo'

const appRoutes = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Home} />
				<Route path="/users/:username" component={User} />
				<Route path="/users/:username/repos" component={Repos} />
				<Route path="/users/:username/repos/:reponame" component={SingleRepo} />
				<Route path="/plan" component={Plan} />
				<Route path="*" component={PageNotFound} />
			</Route>
		</Router>
	</Provider>
)

ReactDOM.render(
  appRoutes,
  document.getElementById('root')
)