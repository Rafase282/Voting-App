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
      signup: this.state.signup = true
    });
    if (this.state.signup || this.state.login) {
      var header = document.getElementById("btn-hide");
      var main = document.getElementById("main");
      var form = document.getElementById("form");
      //element.classList.add("hideMe");
      header.className = header.className + " hideMe";
      main.className = main.className + " hideMe";
      form.classList.remove("hideMe");
    } 
  },
  unhideMe: function(event){
    this.setState({
      signup: this.state.signup = false
    });
    var header = document.getElementById("btn-hide");
    var main = document.getElementById("main");
    var form = document.getElementById("form");
    header.classList.remove("hideMe");
    main.classList.remove("hideMe");
    form.className = "hideMe";
  },
  render: function() {
    return (
      < div >
      < NavBar loggedin={this.state.login} signup={this.state.signup} onClick={this.handleClick.bind(this)} unhideMe={this.unhideMe.bind(this)}/ >
      < HeaderArea loggedin={this.state.login} signup={this.state.signup} onClick={this.handleClick.bind(this)} unhideMe={this.unhideMe.bind(this)} SignUp/>
      < MainArea loggedin={this.state.login} signup={this.state.signup} onClick={this.handleClick.bind(this)} unhideMe={this.unhideMe.bind(this)}/ >
      < Footer / >
      < /div>
    );
  }
});
ReactDOM.render(
  < App / >,
  document.getElementById('body')
);