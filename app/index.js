import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import * as reducers from './reducers'
import {App, About, Home, TodoApp} from './pages'

// import App from './pages/app'
// import HomeProvider from './pages/home'
// import About from './pages/about'

console.log(App, Home, About)
const reducer = combineReducers({...reducers, routing: routerReducer})
const store = createStore(reducer)
const history = syncHistoryWithStore(browserHistory, store)

render(
	<Provider store={store}>
	<div>
		<Router history = {history}>
			<Route path = "/" component = {App}>
				<IndexRoute component = {Home} />
				<Route path = "home" component = {Home} />
				<Route path = "todo" component = {TodoApp} />
				<Route path = "about" component = {About} />
			</Route>
		</Router>
	</div>
   	</Provider>
  ,
  document.getElementById('root')
)
