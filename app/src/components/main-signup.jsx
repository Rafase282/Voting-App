var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <main id="form">
          <form className="center">
            Name:
            <br/>
            <input type="text" name="name"/>
            <br/> E-Mail:
            <br/>
            <input type="text" name="email"/>
            <br/> Password:
            <br/>
            <input type="password" name="password"/>
            <br/>< br/>
            <input type="submit" value="Sign Up" className="btn btn-success"/> &thinsp;
            <button type="button" className="btn btn-info">Use <i className="fa fa-twitter fa-fw"></i></button>  &thinsp;
            <button type="button" className="btn btn-danger">Use <i className="fa fa-google-plus fa-fw"></i></button> &thinsp;
            <button type="button" className="btn btn-default">Use <i className="fa fa-github fa-fw"></i></button>
          </form>
          <section id="push"></section>
        </main>
      </div>
    );
  }
});