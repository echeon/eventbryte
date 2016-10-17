import React from 'react';
import Slider from 'react-slick';

export default class HomeImageSlider extends React.Component {
  render() {
    const options = {
      autoplay: true,
      fade: true,
      speed: 2000,
      autoplaySpeed: 2000,
      lazyLoad: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className="slideshow-container">
        <Slider {...options}>
          <div id="slideshow-image-1"></div>
          <div id="slideshow-image-2"></div>
          <div id="slideshow-image-3"></div>
          <div id="slideshow-image-4"></div>
        </Slider>
      </div>
    );
  }
}
