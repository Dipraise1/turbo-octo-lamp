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
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <Slider {...settings}>
        <div>
          <img src="/images/snipexbnbbo-medium.png" alt="Binance Coin" className="mx-auto w-150 h-24" />
        </div>
        <div>
          <img src="/images/snipexeth.png" alt="Ethereum" className="mx-auto w-150 h-24" />
        </div>
        <div>
          <img src="/images/solana-logo-vector.png" alt="Solana" className="mx-auto w-150 h-24" />
        </div>
        {/* Add more supported cryptocurrencies logos here */}
      </Slider>
    </div>
  );
};

export default SupportedCryptosSlider;
