/* eslint-disable jsx-a11y/alt-text */
import Slider from "react-slick";
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { FaFacebook } from "react-icons/fa";
import { useWindowWidth } from "@react-hook/window-size";
export default function HeroSection() {
  const [selected, setSelected] = useState("TR");
  const windowWith = useWindowWidth();
  const phones = {
    US: "+1",
    DE: "+50",
    TR: "+90",
    IT: "+7",
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="relative h-auto md:h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      {windowWith >= 768 && (
        <Slider {...settings}>
          <div>
            <img
              className="w-full h-[500px] object-cover"
              src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg"
            />
          </div>
          <div>
            <img
              className="w-full h-[500px] object-cover"
              src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg"
            />
          </div>
        </Slider>
      )}
      <div className="md:container flex justify-between items-center relative md:absolute top-0 left  md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full z-20">
        <div className="hidden md:block">
          <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" />
          <h3 className="text-4xl mt-8 font-semibold text-white">
            Dakikalar içinde <br />
            kapınızda
          </h3>
        </div>
        <div className="w-full md:w-[400px] md:roundedlg bg-gray-50 p-6">
          <h4 className="text-primary-brand-color text-center font-semibold">
            Giriş yap veya kayıt ol
          </h4>
          <div className="grid gap-y-3">
            <div className="flex gap-x-2">
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                onSelect={(code) => setSelected(code)}
                selected={selected}
                className="flag-select"
              />
              <label className="flex-1 relative group block cursor-pointer">
                <input
                  required
                  className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors group-hover:border-primary-brand-color outline-none focus:border-primary-brand-color text-sm pt-2 peer"
                />
                <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 peer-focus:h-7 transition-all peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 tra peer-valid:text-primary-brand-color peer-valid:text-xs">
                  Telefon Numarası
                </span>
              </label>
            </div>
            <button className="bg-brand-yellow h-12 flex items-center justify-center rounded-md  w-full text-sm font-semibold text-primary-brand-color transition-colors hover:text-brand-yellow hover:bg-primary-brand-color">
              Telefon numarası ile devam et
            </button>
            <hr className="h-[1px] bg-gray300 my-2"></hr>
            <button className="bg-blue-700 bg-opacity-10 h-12 px-4 text-blue-700 text-opacity-80 flex items-center  rounded-md  w-full text-sm font-semibold transition-colors hover:bg-blue-700  hover:text-white">
              <FaFacebook size={18} className="mr-auto" />
              <span className="mx-auto">Facebook ile devam et</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
