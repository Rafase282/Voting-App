var React = require('react');
module.exports = React.createClass({
    render: function() {
        return (
            <footer>
              <p>Copyright © Rafael J. Rodriguez 2015. All Rights Reserved</p>
              <p>
                <a href="mailto:rafase282@gmail.com">
                  <i className="fa fa-envelope fa-fw"> </i>
                </a>
                <a href="https://github.com/Rafase282" target='_blank'>
                   <i className="fa fa-github fa-fw"></i>
                </a>
                <a href="https://www.linkedin.com/in/rafase282" target='_blank'>
                   <i className="fa fa-linkedin"></i>&nbsp;
                </a>
                <a href="http://codepen.io/Rafase282" target='_blank'>
                   <i className="fa fa-codepen"></i>&nbsp;
                </a>
                <a href="https://rafase282.wordpress.com/" target='_blank'>
                   <i className="fa fa-wordpress"></i>&nbsp;
                </a>
                <a href="http://www.freecodecamp.com/rafase282" target='_blank'>
                (<i className="fa fa-fire fa-fw"></i>)
              </a></p>
            </footer>
            );
    }
});