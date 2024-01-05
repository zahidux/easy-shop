import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import image from "../assets/404.png";
const PageNotFound = () => {
  return (
    <div>
      <Helmet>
        <title>ES - 404 </title>
      </Helmet>
      <section className=" py-32 flex flex-col items-center justify-center">
        <img src={image} alt="" />
        <Link to={"/"} className="btn-primary my-8">
          Back To Home
        </Link>
      </section>
    </div>
  );
};

export default PageNotFound;
