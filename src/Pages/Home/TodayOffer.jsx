import React from "react";
import bg from "../../assets/images/todayOffer.jpg";

const TodayOffer = () => {
  return (
    <section className="flex justify-center items-center">
      <img className="w-full h-[500px]" src={bg} alt="offer" />
      <div data-aos="zoom-in" className="container absolute text-center grid ">
        <h2 className=" text-3xl md:text-5xl font-bold" text-slate-800>
          Deal Of The Day
        </h2>
        <h3 className="text-lg md:text-3xl font-semibold -mb-12 mt-2 md:my-3 text-slate-800">
          <span className="text-orange-400">Up to 35% Off </span> on All Other
          Car Toys!
        </h3>
        <p className="text-base md:text-xl font-medium text-slate-600 invisible md:visible">
          Attention all parents and caregivers! We have an incredible offer for
          you. For a limited <br /> time only, enjoy up to 35% off on all other
          Car Toys.
        </p>
        <div>
          <button className="btn-primary  md:mt-4">Shop Now</button>
        </div>
      </div>
    </section>
  );
};

export default TodayOffer;
