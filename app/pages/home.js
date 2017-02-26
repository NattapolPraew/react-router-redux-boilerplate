import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'

import { increase, decrease } from '../actions/count'
import Select2 from '../components/select2Wraper'

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
		<button className="button" onClick={() => this.props.increase(1)}>Increase</button>
		<button className="button" onClick={() => this.props.decrease(1)}>Decrease</button>

      	<Select2 onChange={(change)=>{console.log(change);}}
      	option={{
      		placeholder:"test placeholder",
    		allowClear: true,
    		multiple: true
    	}}>
      		<option value="1">Test 1</option>
      		<option value="2">Test 2</option>
      		<option value="3">Test 3</option>
      	</Select2>
		</div>
      )
   }
};

Home = connect(
  state => ({ number: state.update.number }),
  { increase, decrease }
)(Home);
export {Home};
