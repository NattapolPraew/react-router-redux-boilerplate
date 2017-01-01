import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'

import { increase, decrease } from '../actions/count'


class Home extends React.Component {
	constructor(number, increase, decrease){
		super();
		// this.state = {
		// 	number : number,
		// 	increase : increase,
		// 	decrease : decrease,
		// };
	}
// let Home = ()=>({
	render() {
      return (
        <div>
			Some state changes:
			{this.props.number}
		<button onClick={() => this.props.increase(1)}>Increase</button>
		<button onClick={() => this.props.decrease(1)}>Decrease</button>
		</div>
      )
   }
};

Home = connect(
  state => ({ number: state.update.number }),
  { increase, decrease }
)(Home);
export {Home};
