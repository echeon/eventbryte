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
        <div className="home-button-container">
          <button className="browse-events-button">
            <Link to="/browse">Browse Events</Link>
          </button>
          <button className="create-event-button">
            <Link to="/events/create">Create Event</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeScreen;
