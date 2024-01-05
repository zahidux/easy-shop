import React from "react";
import Banner from "./Banner";
import { Helmet } from "react-helmet";
import TodayOffer from "./TodayOffer";
import Gallery from "./Gallery";
import BestProducts from "./BestProducts";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Home - Easy Shop</title>
      </Helmet>
      <Banner />
      <BestProducts />
      <Gallery />
      <TodayOffer />
    </div>
  );
};

export default Home;
