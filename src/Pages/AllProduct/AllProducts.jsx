import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import SectionTitle from "../../Components/SectionTitle";
import BestProductsCart from "../Home/BestProductsCart";

const AllProducts = () => {
  const [bestProducts, setBestProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setBestProducts(data));
  });
  return (
    <div>
      <Helmet>
        <title> All Products - Easy Shop</title>
      </Helmet>
      <section>
        <SectionTitle Heading={"All Products"} />
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          {bestProducts.map((products) => (
            <BestProductsCart key={products._id} products={products} />
          ))}
        </div>
      </section>
      );
    </div>
  );
};

export default AllProducts;
