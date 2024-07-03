import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NextArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-75 focus:outline-none z-10"
    onClick={onClick}
    aria-label="Next Slide"
  >
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
    </svg>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-75 focus:outline-none z-10"
    onClick={onClick}
    aria-label="Previous Slide"
  >
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
    </svg>
  </button>
);

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 relative">
      <h2 className="text-2xl font-bold text-center mb-4">More Products</h2>
      <Slider {...settings} className="rounded-lg shadow-lg overflow-hidden">
        <div className="px-4">
          <img src="https://via.placeholder.com/600x400" alt="Slide 1" className="w-full h-auto" />
        </div>
        <div className="px-4">
          <img src="https://via.placeholder.com/600x400" alt="Slide 2" className="w-full h-auto" />
        </div>
        <div className="px-4">
          <img src="https://via.placeholder.com/600x400" alt="Slide 3" className="w-full h-auto" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;