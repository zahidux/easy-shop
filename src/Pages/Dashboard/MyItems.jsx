import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyItemsCart from "./MyItemsCart";
import Swal from "sweetalert2";

const MyItems = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);

  const url = `http://localhost:5000?email=${user.email}`;

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("car-access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setItems(data);
        } else {
          navigate("/");
        }
      });
  }, [url]);

  const handelDelete = (id) => {
    const url = `http://localhost:5000/${id}`;
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
              const remaining = items.filter((item) => item._id !== id);
              setItems(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <h2 className="text-center py-20  text-3xl font-semibold text-zinc-700">
        Easy Shop <span className="text-sky-500"> New Items</span>
      </h2>
      {/* Product table */}
      <div data-aos="fade-up" className="container overflow-x-auto">
        <table className="table w-full mb-24  ">
          <thead>
            <tr className="bg-sky-400 text-white uppercase leading-normal">
              <th className="py-3 px-4 text-left">Photo</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-2 text-center">Price</th>
              <th className="py-3 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 font-medium">
            {items.map((item) => (
              <MyItemsCart
                key={item._id}
                item={item}
                handelDelete={handelDelete}
              ></MyItemsCart>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyItems;
