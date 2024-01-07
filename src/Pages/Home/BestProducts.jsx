import React, { useEffect, useState } from "react";
import BestProductsCart from "./BestProductsCart";
import SectionTitle from "../../Components/SectionTitle";
import Spinner from "../../Components/Spinner ";

const BestProducts = () => {
  const [bestProducts, setBestProducts] = useState(3);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setBestProducts(data));
  });

  //spinner
  let content;
  if (bestProducts.length === 0) {
    content = <Spinner />;
  } else if (bestProducts.length > 0) {
    content = (
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        {bestProducts.map((product) => (
          <BestProductsCart key={product._id} product={product} />
        ))}
      </div>
    );
  }
  return (
    <section>
      <SectionTitle subHeading={"Best Sales"} Heading={"Best Products"} />
      {content};
    </section>
  );
};

export default BestProducts;
