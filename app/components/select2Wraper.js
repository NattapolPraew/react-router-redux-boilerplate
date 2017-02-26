import React from 'react';
import ReactDOM from 'react-dom'
// import { connect } from 'react-redux'

class Select2 extends React.Component {

  static propTypes() {
    return {
      option: React.PropTypes.Object,
      onChange: React.PropTypes.func
    }
  };

  static defaultProps() {
    option: {}
  };

  componentDidMount() {
    // 2) do DOM lib stuff
    this.node = ReactDOM.findDOMNode(this);
    this.select2Node = $(this.node).select2();
    this.select2Node.on('select2:select', this.props.onChange);
    // 3) call method to reconnect React's rendering
    this.updateSelect2();
  }

  componentWillReceiveProps(newProps) {
    // 4) render reconnected tree when props change
    this.updateSelect2(newProps);
  }

  updateSelect2(props) {
    // decide to use newProps from `componentWillReceiveProps` or to use
    // existing props from `componentDidMount`
    props = props || this.props;
    this.select2Node.empty();
    this.select2Node = this.select2Node.select2(props.option);
    // this.{multiple, style, className} = props;
    // 5) make a new rendering tree, we've now hidden the DOM
    //    manipulation from jQuery UI dialog and then continued
    //    rendering with React
    // 6) Call methods on the DOM lib via prop changes
    // if (props.open)
    //   this.dialog.open();
    // else
    //   this.dialog.close();
  }

  componentWillUnmount() {
    // clean up the mess
    this.select2Node.select2('destroy');
  }

  // getDefaultProps() {
  //   return {
  //     // title: '',
  //     // onClose: function(){}
  //   }
  // };

  constructor(){
    super();
  }

  render() {
    // 1) render nothing, this way the DOM diff will never try to do
    //    anything to it again, and we get a node to mess with
    return  <select style={{width:"100%"}}>
              {this.props.children}
            </select>
  }
};

export default Select2;
// export default connect()(Select2);