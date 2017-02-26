import React from 'react'
// import { render } from 'react-dom'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
import { Link } from 'react-router'
import { MenuSlider } from '../components/menuSlider'
// import reducer from './reducers'

// const store = createStore(reducer)


export class App extends React.Component {
    render() {
        return (
            <div className="columns is-gapless">
                <MenuSlider className="column is-one-quarter animate-width" />
                <section className="column hero is-info is-large is-fullheight">
                  <div className="hero-head">
                    <header className="nav">
                      <div className="container">
                        <span className="nav-toggle">
                          <span></span>
                          <span></span>
                          <span></span>
                        </span>
                        <div className="nav-left nav-menu">
                          <a className="nav-item is-active">
                            Home
                          </a>
                          <a className="nav-item">
                            Examples
                          </a>
                          <a className="nav-item">
                            Documentation
                          </a>
                          <span className="nav-item">
                            <a className="button is-info is-inverted">
                              <span className="icon">
                                <i className="fa fa-github"></i>
                              </span>
                              <span>Download</span>
                            </a>
                          </span>
                        </div>
                      </div>
                    </header>
                  </div>
                  <div className="hero-body">
                    <div className="container has-text-centered">
                      <h1 className="title">
                        Title
                      </h1>
                      <div>
                          {this.props.children}
                      </div>
                    </div>
                  </div>
                  <div className="hero-foot">
                    <nav className="tabs is-boxed is-fullwidth">
                      <div className="container">
                        <ul>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </section>
             </div>
        );
    }
}
