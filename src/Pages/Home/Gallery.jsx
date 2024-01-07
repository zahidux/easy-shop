import React, { useState } from "react";
import GalleryCart from "./GalleryCart";
import SectionTitle from "../../Components/SectionTitle";

const GalleryProducts = () => {
  const [gallery, setGallery] = useState([]);

  fetch("http://localhost:5000/gallery")
    .then((res) => res.json())
    .then((data) => setGallery(data));
  return (
    <section data-aos="fade-up" className="my-12">
      <SectionTitle subHeading={"Gallery"} Heading={"Our Products Gallery"} />
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-12 ">
        {gallery.map((item) => (
          <GalleryCart key={item._id} item={item}></GalleryCart>
        ))}
      </div>
    </section>
  );
};

export default GalleryProducts;
