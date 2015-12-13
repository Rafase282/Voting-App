var React = require('react');

var HeaderArea = React.createClass({
  render: function() {
    return (
      <section className="jumbotron center">
      <h1> Voting App</h1>
      <h2>Create custom polls with live results.</h2>
      <button type="button" className="btn btn-success">Sign up</button>
      </section>
    );
  }
});
// You could also just do module.exports = React.createClass({ at the begining instead.
module.exports=HeaderArea;