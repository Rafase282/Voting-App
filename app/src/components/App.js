var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require("./navbar.js")
var HeaderArea = require("./header.js")
var MainArea = require("./main.js")
var Footer = require("./footer.js")

var App = React.createClass({
  render: function() {
    return (
        <NavBar />,
        <HeaderArea />,
        <MainArea />,
        <Footer />
    );
  }
});
ReactDOM.render(
  <NavBar />,
  <HeaderArea />,
  <MainArea />,
  <Footer />,
  document.getElementById('body')
);