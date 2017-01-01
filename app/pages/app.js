import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// import App from './components/App'
// import reducer from './reducers'

// const store = createStore(reducer)


export class App extends React.Component {
    render() {
        return (
             <div>
                <ul>
                   <li>Home</li>
                   <li>About</li>
                   <li>Contact</li>
                </ul>
                    
               {this.props.children}
             </div>
        );
    }
}