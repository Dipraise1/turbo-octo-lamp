"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SupportedCryptosSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500, // Corrected the typo here
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 bg-gradient-to-r from-primary-600 to-secondary-600 max-w-screen-xl mx-auto">
      <Slider {...settings}>
        <div>
          <img src="/images/snipexbnbbo-medium-removebg-preview.png" alt="Binance Coin" className="mx-auto w-200 h-40" />
        </div>
        <div>
          <img src="/images/snipexeth-removebg-preview.png" alt="Ethereum" className="mx-auto w-200 h-40" />
        </div>
        <div>
          <img src="/images/solana-logo-vector-removebg-preview.png" alt="Solana" className="mx-auto w-200 h-40" />
        </div>
        {/* Add more supported cryptocurrencies logos here */}
      </Slider>
    </div>
  );
};

export default SupportedCryptosSlider;
