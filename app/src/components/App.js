var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./navbar.js');
var HeaderArea = require('./header.js');
var MainArea = require('./main.js');
var Footer = require('./footer.js');

var App = React.createClass({
  getInitialState: function() {
    return {
      signup: true,
      login: false
    };
  },
  handleClick: function(event) {
    this.setState({
      signup: !this.state.signup
    });
    if (this.state.signup || this.state.login) {
      var element = document.getElementById("btn-hide");
      //element.classList.add("hideMe");
      element.className = element.className + " hideMe";
    }
  },
  unhideMe: function(event){
    this.setState({
      signup: this.state.signup = false
    });
    var element = document.getElementById("btn-hide");
    element.classList.remove("hideMe");
  },
  render: function() {
    return (
      < div >
      < NavBar loggedin={this.state.login} signup={this.state.signup} onClick={this.handleClick.bind(this)} unhideMe={this.unhideMe.bind(this)}/ >
      < HeaderArea loggedin={this.state.login} signup={this.state.signup} onClick={this.handleClick.bind(this)} unhideMe={this.unhideMe.bind(this)}/>
      < MainArea / >
      < Footer / >
      < /div>
    );
  }
});
ReactDOM.render(
  < App / >,
  document.getElementById('body')
);