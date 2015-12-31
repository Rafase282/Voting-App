var React = require('react');

var NavBar =  React.createClass({
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
            <a className="navbar-brand" data-value = {"default"} onClick={this.props.onClick}>Voting App</a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className="active"><a data-value = {"default"} onClick={this.props.onClick}>Home</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li data-value = {"signup"} onClick={this.props.onClick}>
                <a data-value = {"signup"} >
                  <span data-value = {"signup"} className="glyphicon glyphicon-user"></span><span data-value = {"signup"}> Sign Up</span></a>
              </li>
              <li data-value = {"login"} onClick={this.props.onClick}>
                <a data-value = {"login"}>
                  <span data-value = {"login"} className="glyphicon glyphicon-log-in"></span><span data-value = {"login"}> Login</span></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      );
  }
});
module.exports = NavBar;