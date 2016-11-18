import React from 'react';
import facebook from '../../img/facebook.jpeg';
import spotify from '../../img/spotify.png';
import google from '../../img/google.png';

const Projects = React.createClass({
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Coding is fun</h1>
          <p>Disclaimer: I built none of these</p>
        </div>
        <div className="container">
          <div className="project-container">
            <img src={facebook} alt="Flarpbook" />
            <div>
              <h3>Flarpbook</h3>
              <p>What a wild ride it's been. I build a social platform to help people connect and it's been a lot of fun to make a bajillion dollars. I learned a lot about trust and programming.</p>
            </div>
          </div>
          <div className="project-container">
            <img src={spotify} alt="Spootify"/>
            <div>
              <h3>Spootify</h3>
              <p>Everyone's favorite mystical music app. I learned so much about desktop applications and also making a product that lots of people like to get really aggressive about when they compare it to lesser services like Rdio (rip). Spootify changed the whole world and make iTunes look like trash and also saved people a lot of money and time when it got them to stop downloading music.</p>
            </div>
          </div>
          <div className="project-container">
            <img src={google} alt="Gargle"/>
            <div>
              <h3>Gargle</h3>
              <p>Search for anything! The world is your oyster! This is one of my favorite projects because it gave me the skills and manpower to eventually take over the world. Think of anything.... it's on Gargle.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Projects;