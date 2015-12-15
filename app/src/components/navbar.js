var React = require('react');

var NavBar =  React.createClass({
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
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#" onClick={this.unhideMe}>Voting App</a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#" onClick={this.unhideMe}>Home</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#" onClick={this.handleClick}>
                  <span className="glyphicon glyphicon-user"></span> Sign Up</a>
              </li>
              <li>
                <a href="#">
                  <span className="glyphicon glyphicon-log-in" id="btn-hide"></span> Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      );
  }
});
module.exports = NavBar;