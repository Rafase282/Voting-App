var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./navbar.js');
var HeaderArea = require('./header.js');
var MainArea = require('./main.js');
var Footer = require('./footer.js');

var App = React.createClass({
  getInitialState: function() {
    return {
      login: false,
      view: 'default'
    };
  },
  handleClick: function(event) {
    this.setState({
      view: event.target.dataset.value
    });
  },
  componentDidUpdate: function(){
    console.log('App', this.state.view);
  },
  render: function() {
    return (
      < div >
      < NavBar view={this.state.view} loggedin={this.state.login} onClick={this.handleClick}/ >
      < HeaderArea view={this.state.view} onClick={this.handleClick}/>
      < MainArea view = {this.state.view} loggedin={this.state.login} onClick={this.handleClick}/ >
      < Footer / >
      < /div >
    );
  }
});
ReactDOM.render(
  < App / >,
  document.getElementById('body')
);