import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import HomeImageSlider from './home_image_slider';


const HomeScreen = () => {
  return (
    <section className="home-screen">
      <div className="slideshow-overlay"></div>

      <HomeImageSlider />

      <div className="home-screen-content">
        <h2>Welcome</h2>
        <p>Promote, manage, host, or purchase tickets for successful events.</p>
        <Link to="/browse">Browse Events</Link>
        <Link to="/events/create">Create Event</Link>
      </div>
    </section>
  );
};

export default HomeScreen;
