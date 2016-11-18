import React from 'react';
import hubspot from '../../img/hubspot.png';
import zoe from '../../img/zoe.png';

const About = React.createClass({
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Zoe Sobin</h1>
          <p>Software Engineer | HubSpot inc.</p>
        </div>
        <div className="content">
          <img className="image" src={zoe} alt="Zoe" height={200}/>
          <p>
            Hi, I'm a software engineer currently working at <strong>HubSpot</strong> in Cambridge, Massachusetts. I recently graduated from <strong>Tufts University</strong> with degrees in Computer Science and Entrepreneurial Leadership.
          </p>
          <p>
            I'm a New England born and raised developer currently living in downtown Boston. I enjoy all things frontend and UX and when I'm not tinkering with web apps I enjoy <strong>Gilmore Girls</strong> (netflix revival in a week!!!!), hiking, fishing and cooking (and eating).
          </p>
          <p>
            I'm currently working at HubSpot, a marketing software company (think- everything you need to get the word out about your product via the internet) and I love it!
          </p>
          <img className="image" src={hubspot} alt="HubSpot" />
        </div>
      </div>
    );
  }
});

export default About;