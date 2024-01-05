import React from "react";

const GalleryCart = ({ item }) => {
  const { title, image } = item;
  return (
    <div className="my-5 p-14 rounded-xl shadow-xl hover:shadow-2xl md:w-full h-100 relative md:flex flex-col over:scale-110 hover:z-40 z-10 transition-all duration-300 ease-in-out group ">
      <img
        className="h-full mb-4 m-auto relative group-hover:scale-125 transition-all duration-300 ease-in-out"
        src={image}
        alt=""
      />
      <div className="absolute w-full left-0 bottom-0 py-3 my-3 text-center scale-0 origin-center group-hover:scale-100 transition-all duration-300 ease-in-out">
        <h3 className=" text-white font-bold">{title}</h3>
      </div>
    </div>
  );
};

export default GalleryCart;
