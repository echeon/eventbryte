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
          <div><img src="http://res.cloudinary.com/dldbslv2a/image/upload/v1476080450/slideshow_image_1_yqbv17.jpg"/></div>
          <div><img src="http://res.cloudinary.com/dldbslv2a/image/upload/v1476080451/slideshow_image_2_b1kson.jpg"/></div>
          <div><img src="http://res.cloudinary.com/dldbslv2a/image/upload/v1476080452/slideshow_image_3_isgnpe.jpg"/></div>
          <div><img src="http://res.cloudinary.com/dldbslv2a/image/upload/v1476080452/slideshow_image_4_m5hujb.jpg"/></div>
        </Slider>
      </div>
    );
  }
}
