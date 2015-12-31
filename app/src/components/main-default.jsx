var React = require('react');
module.exports = React.createClass({
  render: function() {
      return (
        <div>
        <main id="main">
          <section className="container-fluid center">
            <div className="row">
              <div className="col-sm-4 col-lg-4">
                <i className="fa fa-bolt fa-5x"></i>
                <h3>Live Results</h3>
                <p>Live graphs show your poll results immediately in an easy to understand format. One graph will not provide the whole picture, that's why we provide multiple graph types to better describe your results.</p>
              </div>
              <div className="col-sm-4 col-lg-4">
                <i className="fa fa-globe fa-5x"></i>
                <h3>Works Everywhere</h3>
                <p>Traditional desktop computers now represent only 30% of Internet traffic. Your poll must work on the tablets, smart phones, netbooks and notebooks that your visitors are using. Our responsive designs do just that.</p>
              </div>
              <div className="col-sm-4 col-lg-4">
                <i className="fa fa-facebook fa-5x"></i>
                <h3>Social Integration</h3>
                <p>Free integrated facebook or traditional comments allow your poll voters to provide immediate feedback and discuss results. Social share buttons encourage your poll voters to help spread the word.</p>
              </div>
            </div>
          </section>
          <section id="push"></section>
        </main>
        </div>
    );
  }
});