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
            <a className="navbar-brand" onClick={this.props.unhideMe}>Voting App</a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className="active"><a onClick={this.props.unhideMe}>Home</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a onClick={this.props.onClick}>
                  <span className="glyphicon glyphicon-user"></span> Sign Up</a>
              </li>
              <li>
                <a>
                  <span className="glyphicon glyphicon-log-in"></span> Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      );
  }
});
module.exports = NavBar;