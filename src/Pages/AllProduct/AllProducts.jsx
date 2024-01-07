import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import SectionTitle from "../../Components/SectionTitle";
import BestProductsCart from "../Home/BestProductsCart";
import Spinner from "../../Components/Spinner ";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/products?search=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [searchTerm]);

  let content;
  if (products.length === 0) {
    content = <Spinner />;
  } else if (products.length > 0) {
    content = products.map((product) => (
      <BestProductsCart key={product._id} product={product} />
    ));
  }

  return (
    <div className="my-16">
      <Helmet>
        <title> All Products - Easy Shop</title>
      </Helmet>
      <section>
        <SectionTitle Heading={"All Products"} />

        <div className="flex items-center justify-center my-12 mb-8">
          <input
            className="md:w-96 px-3 py-2 border border-sky-500 outline-none rounded-tl-3xl rounded-bl-3xl"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-sky-400  border border-pink hover:border-blue px-5 py-2 text-white rounded-tr-3xl rounded-br-3xl duration-300">
            Search
          </button>
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {content}
        </div>
      </section>
    </div>
  );
};

export default AllProducts;
