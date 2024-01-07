import React from "react";
import { Link } from "react-router-dom";
import { FaPen } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const MyItemsCart = ({ item, handelDelete }) => {
  const { _id, title, price, image } = item;

  return (
    <tr className="border-b  border-sky-400 ">
      <td className="py-3 px-4 text-left text-blue">
        <p className="w-16 h-16 rounded-full border border-blue shadow-lg">
          <img className="h-full rounded-full" src={image} alt="" />
        </p>
      </td>
      <td className="py-3 px-4 text-left text-blue ">
        <Link to={`/productsDetails/${_id}`}>{title?.slice(0, 35)} ...</Link>
      </td>
      <td className="py-3 px-2 text-center">{price}</td>
      <td className=" py-3 px-4 text-center">
        <div className="flex items-center justify-center gap-2">
          <Link to={`/editProducts/${_id}`}>
            <button className="h-10 w-10 flex items-center justify-center bg-sky-500 rounded-full text-white shadow-lg hover:shadow-blue duration-300">
              <FaPen />
            </button>
          </Link>

          <button
            onClick={() => handelDelete(_id)}
            className="h-10 w-10 flex items-center justify-center bg-rose-600 rounded-full text-white shadow-lg hover:shadow-pink hover:bg-pink duration-300"
          >
            <RiDeleteBin6Line />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MyItemsCart;
