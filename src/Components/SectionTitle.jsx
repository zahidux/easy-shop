import React from "react";

const SectionTitle = ({ subHeading, Heading }) => {
  return (
    <div className="text-center my-10">
      <p className="text-sky-300 font-semibold text-lg mb-3">{subHeading}</p>
      <h3 className="text-slate-700 font-bold text-4xl">{Heading}</h3>
    </div>
  );
};

export default SectionTitle;
