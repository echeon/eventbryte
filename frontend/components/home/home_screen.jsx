import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import HomeImageSlider from './home_image_slider';


const HomeScreen = () => {
  return (
    <div className="home-screen">
      <div className="slideshow-overlay"></div>

      <HomeImageSlider />

    </div>
  );
};

export default HomeScreen;



// <div className="home-screen-content">
//   <div className="home-btns">
//     <button className="home-browse-events-btn">
//       <Link to="/">Browse Events</Link>
//     </button>
//     <button className="home-create-event-btn">
//       <Link to="/">Create Event</Link>
//     </button>
//   </div>
// </div>
