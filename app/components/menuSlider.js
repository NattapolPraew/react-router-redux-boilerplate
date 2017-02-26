import React from 'react'
import { render } from 'react-dom';
import { Link } from 'react-router'


export class MenuSlider extends React.Component {
    render() {
        return (
             <div className={this.props.className}>
                <aside className="menu">
                  <p className="menu-label">
                    General
                  </p>
                  <ul className="menu-list">
                   <li><Link to={`/home`}>Home</Link></li>
                   <li><Link to={`/about`}>About</Link></li>
                   <li><Link to={`/todo`}>Todo</Link></li>
                  </ul>
                </aside>
             </div>
        );
    }
}