import React from 'react';

const Contact = React.createClass({
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Let's connect</h1>
          <a className="social-icon" href="https://twitter.com/zoesobin" target="_blank">
            <i className="fa fa-twitter fa-2x"/>
          </a>
          <a className="social-icon" href="https://www.instagram.com/zoesobin/" target="_blank">
            <i className="fa fa-instagram fa-2x"/>
          </a>
          <a className="social-icon" href="https://github.com/zsobin" target="_blank">
            <i className="fa fa-github fa-2x"/>
          </a>
          <a className="social-icon" href="https://www.linkedin.com/in/zoesobin" target="_blank">
            <i className="fa fa-linkedin fa-2x"/>
          </a>
        </div>
        <div className="content">
          <iframe className="giphy-embed" src="//giphy.com/embed/n5aPq3NIKHvIk" width="480" height="213" frameBorder="0"  allowFullScreen/>
          <p><a href="http://giphy.com/gifs/happy-gif-excited-tina-fey-n5aPq3NIKHvIk">via GIPHY</a></p>
        </div>
      </div>
    );
  }
});

export default Contact;