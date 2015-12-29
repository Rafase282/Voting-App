var React = require('react');

var HeaderArea = React.createClass({
  render: function() {
    //this.props.view
    //button = <button type="button" id="btn-hide" className="btn btn-success" data-value = {"signup"} onClick={this.props.onClick}>Sign up</button>
    var button = "";
    
    switch (this.props.view) {
      case 'signup':
        button = "";
        break;
      default:
        button = <button type="button" id="btn-hide" className="btn btn-success" data-value = {"signup"} onClick={this.props.onClick}>Sign up</button>
    }
    
    return (
      <section className="jumbotron center">
      <h1> Voting App</h1>
      <h2>Create custom polls with live results.</h2>
      {button}
      </section>
    );
  }
});
// You could also just do module.exports = React.createClass({ at the begining instead.
module.exports = HeaderArea;