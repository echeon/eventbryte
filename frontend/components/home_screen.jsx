import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <div className="overlay"></div>
      <img src={window.eventbryteAssets.homeScreenImage["1"]} />
      <div className="home-screen-content">
        <div className="home-btns">
          <button className="home-browse-events-btn">
            <Link to="/">Browse Events</Link>
          </button>
          <button className="home-create-event-btn">
            <Link to="/">Create Event</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
