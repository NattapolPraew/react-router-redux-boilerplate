import React from 'react';
import { render } from 'react-dom';


function Square(props) {
	return <div>{props.value}</div>
}
export class Todos extends React.Component {
	constructor(){
		super();
		this.state = {

		};
	}
	render() {
		return <li> 
			{this.props.text} 
			<button onClick={this.props.onClickRemove}/>
		</li>
	}
}

export class Hello extends React.Component {
    render() {
        return <p> Hello React Todos App! </p>;
    }
}


