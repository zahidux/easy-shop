import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import banner1 from "../../assets/images/b1.jpg";
import banner3 from "../../assets/images/b3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="flex place-items-center">
          <img
            className="h-[350px] md:h-[775px] w-full "
            place-items-center
            src={banner1}
            alt="eCommerce"
          />
          <div data-aos="zoom-in" className="absolute mx-14 md:mx-36">
            <h1 className="text-4xl lg:text-6xl font-bold lg:leading-[70px] text-white mb-3">
              Online Shopping Destination <br /> with Easy Shop
            </h1>
            <div className="invisible md:visible">
              <p className="text-slate-200 md:text-base ">
                Experience unparalleled convenience at our Ultimate Online
                Shopping <br /> Destination, where EasyShop transforms.
              </p>
            </div>
            <button className="btn-primary  md:mt-5">Shop Now</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex place-items-center">
          <img
            className="h-[350px] md:h-[775px] w-full"
            src={banner3}
            alt="eCommerce"
          />
          <div data-aos="zoom-in" className="absolute mx-14 md:mx-36">
            <h1 className="text-4xl lg:text-6xl font-bold lg:leading-[70px] text-white ">
              Fashion Journey at <br /> Unbeatable Prices
            </h1>
            <p className="text-slate-100 md:my-5 md:max-w-md md:text-base invisible md:visible">
              Experience unparalleled convenience at our Ultimate Online
              Shopping Destination.
            </p>
            <button className="btn-primary md:mt-5">Shop Now</button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
