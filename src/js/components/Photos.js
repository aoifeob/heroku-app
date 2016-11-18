import React from 'react';
import pic1 from '../../img/pics/pic1.jpg';
import pic2 from '../../img/pics/pic2.jpg';
import pic3 from '../../img/pics/pic3.jpg';
import pic4 from '../../img/pics/pic4.jpg';
import pic5 from '../../img/pics/pic5.jpg';
import pic6 from '../../img/pics/pic6.jpg';


const Photos = React.createClass({
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Look at these</h1>
          <p>I love traveling! (These are from Google)</p>
        </div>
        <div className="image-container">
          <a href="https://www.thrillist.com/entertainment/los-angeles/the-most-beautiful-places-in-california-road-trip-ideas">
            <img id="pic1" src={pic1} alt="pic1"/>
          </a>
          <a  href="http://www.huffingtonpost.com/conde-nast-traveler/most-beautiful-places-in-the-world_b_8701914.html">
            <img id="pic2" src={pic2} alt="pic2"/>
          </a>
          <a href="http://welldonestuff.com/beautiful-places/">
            <img id="pic3" src={pic3} alt="pic3"/>
          </a>
          <a href="http://inandaroundthemilitary.blogspot.com/2013/10/beautiful-and-lovely-places-1.html">
            <img id="pic4" src={pic4} alt="pic4"/>
          </a>
          <a href="http://inyminy.com/37-most-beautiful-places-in-the-world-youve-got-to-see-before-you-die/">
            <img id="pic5" src={pic5} alt="pic5"/>
          </a>
          <a href="https://www.thrillist.com/entertainment/los-angeles/the-most-beautiful-places-in-california-road-trip-ideas">
            <img id="pic6" src={pic6} alt="pic6"/>
          </a>
        </div>
      </div>
    );
  }
});

export default Photos;
