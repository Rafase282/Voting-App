var React = require('react');
var MainDefault = require('./main-default.jsx');
var MainSignUp = require('./main-signup.jsx');
module.exports = React.createClass({
  componentDidUpdate: function(){
    console.log('main.jsx -> ', 'I Have Received: ', this.props.view);
  },
  render: function() {
    switch(this.props.view){
      case 'home':
        return(< MainDefault view = {this.props.view} />);
        break;
      case 'signup':
        return(< MainSignUp />);
        break;
      default:
        return(< MainDefault view = {this.props.view} />);
        break;
    }
  }
});