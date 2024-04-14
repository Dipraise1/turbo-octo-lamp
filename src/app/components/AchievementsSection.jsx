"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BnbLogo from "../components/images/bnb-svgrepo-com.svg";
import EthLogo from "../components/images/ethereum-svgrepo-com.svg";
import SolanaLogo from "../components/images/solana-svgrepo-com.svg";

const SupportedCryptosSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
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
          <img src={BnbLogo} alt="Binance Coin" className="mx-auto w-24 h-24" />
        </div>
        <div>
          <img src={EthLogo} alt="Ethereum" className="mx-auto w-24 h-24" />
        </div>
        <div>
          <img src={SolanaLogo} alt="Solana" className="mx-auto w-24 h-24" />
        </div>
        {/* Add more supported cryptocurrencies logos here */}
      </Slider>
    </div>
  );
};

export default SupportedCryptosSlider;
