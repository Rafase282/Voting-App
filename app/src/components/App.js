var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./navbar.js');
var HeaderArea = require('./header.js');
var MainArea = require('./main.js');
var Footer = require('./footer.js');

var App = React.createClass({
  render: function() {
    return (
      < div >
      < NavBar / >
      < HeaderArea / >
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