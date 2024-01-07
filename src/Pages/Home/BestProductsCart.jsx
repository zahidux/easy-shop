import React from "react";
import { Link } from "react-router-dom";

const BestProductsCart = ({ product }) => {
  const { _id, name, image, price } = product;
  return (
    <div className="border-2 border-orange-200 hover:shadow-xl hover:shadow-cyan-300 p-5 items-center">
      <img
        data-aos="flip-left"
        className=" h-[275px] w-full"
        src={image}
        alt=""
      />
      <h3>{name}</h3>
      <p>Seller: </p>
      <p>Category: </p>
      <p>Available Quantity:</p>
      <div className="flex justify-between items-center">
        <p>$ {price}</p>
        <Link to={`/productsDetails/${_id}`} className="btn-primary">
          <button>View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default BestProductsCart;
