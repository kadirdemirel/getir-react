/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Banners from "api/banners.json";
import Title from "./ui/Title";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
function NextBtn(props) {
  const { className, style, onClick } = props;
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
  const { className, style, onClick } = props;
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

  useEffect(() => {
    setBanners(Banners);
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevtBtn />,
  };
  return (
    <div className="container mx-auto py-8">
      <Title>Kampanyalar</Title>
      <Slider className="-mx-2" {...settings}>
        {banners.length &&
          banners.map((banner, index) => (
            <div key={index}>
              <picture className="block px-2">
                <img src={banner.image} className="rounded-lg" />
              </picture>
            </div>
          ))}
      </Slider>
    </div>
  );
}
