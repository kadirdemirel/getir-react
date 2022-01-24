/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Banners from "api/banners.json";
import Title from "./ui/Title";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useWindowWidth } from "@react-hook/window-size";
function NextBtn(props) {
  const { onClick } = props;
  return (
    <button
      className={` !text-brand-color absolute top-1/2 -right-6 -translate-y-1/2`}
      onClick={onClick}
    >
      <IoIosArrowForward size={22} />
    </button>
  );
}
function PrevtBtn(props) {
  const { onClick } = props;
  return (
    <button
      className={` !text-brand-color absolute top-1/2 -left-6 -translate-y-1/2`}
      onClick={onClick}
    >
      <IoIosArrowBack size={22} />
    </button>
  );
}

export default function Campaigns() {
  const [banners, setBanners] = useState([]);
  const windowWith = useWindowWidth();
  useEffect(() => {
    setBanners(Banners);
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    arrows: true,
    nextArrow: <NextBtn />,
    prevArrow: <PrevtBtn />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto md:pt-8">
      <div className="hidden md:block">
        <Title>Kampanyalar</Title>
      </div>

      <Slider className="md:-mx-2" {...settings}>
        {banners.length &&
          banners.map((banner, index) => (
            <div key={index}>
              <picture className="block md:px-2">
                <img src={banner.image} className="md:rounded-lg" />
              </picture>
            </div>
          ))}
      </Slider>
    </div>
  );
}
