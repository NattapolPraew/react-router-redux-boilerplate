import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// import App from './components/App'
// import reducer from './reducers'

import {Hello, Todos} from '../components/hello.js'


export class About extends React.Component {
   render() {
      return (
         <div>
            <h1>About...</h1>
            <a className="button">Test</a>
         </div>
      )
   }
}
