import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'
import store from '../store'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App store={store}><div>TEST</div></App>, div)
});