var React = require('react');

var HeaderArea = React.createClass({
  getInitialState: function() {
    return {presed: false};
  },
  handleClick: function(event) {
    this.setState({presed: !this.state.presed});
    if (!this.state.presed) {
      var element = document.getElementById("btn-hide");
      //element.classList.add("hideMe");
      element.className = element.className + " hideMe";
    }
  },
  render: function() {
    return (
      <section className="jumbotron center">
      <h1> Voting App</h1>
      <h2>Create custom polls with live results.</h2>
      <button type="button" id="btn-hide" className="btn btn-success" onClick={this.handleClick}>Sign up</button>
      </section>
    );
  }
});
// You could also just do module.exports = React.createClass({ at the begining instead.
module.exports=HeaderArea;