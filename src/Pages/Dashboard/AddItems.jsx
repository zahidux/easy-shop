import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const AddItems = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const title = from.title.value;
    const description = from.description.value;
    const category = from.category.value;
    const price = from.price.value;
    const image = from.image.value;
    const email = from.email.value;
    const item = { title, description, category, price, image, email };
    console.log(item);

    fetch("http://localhost:5000/myProducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire("Product Add Successfully");
        from.reset();
        navigate("/myItems");
      });
  };

  return (
    <div className="py-16 bg-slate-100 ">
      <h2 className="text-3xl text-center font-semibold text-sky-600">
        New Item
      </h2>
      <div className=" w-10/12 md:w-8/12 mx-auto my-12 shadow-lg  rounded-xl py-16 px-12">
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <p className="ml-2 text-lg text-slate-700 font-semibold">
                Title :
              </p>
              <input
                className="w-full h-12 outline-0 shadow-md bg-slate-50 rounded-md  pl-3 py-8 my-3 hover:shadow-sky-300"
                type="text"
                name="title"
                id="title"
                placeholder="Enter product name"
              />
            </div>
            <div>
              <p className="ml-2 text-lg text-slate-700 font-semibold mt-5">
                Description :
              </p>
              <textarea
                id="description"
                className="w-full h-44 outline-0 shadow-md bg-slate-50 rounded-md p-4 my-3 hover:shadow-sky-300  "
                name="description"
                placeholder="Item details"
              />
            </div>

            {/* category - price- quantity */}
            <div className="md:flex items-center gap-5 mt-8">
              <div className="flex flex-col w-full">
                <p className="ml-2 text-lg text-slate-700 font-semibold">
                  Category :
                </p>
                <input
                  className="w-full h-12 outline-0 shadow-md bg-slate-50 rounded-md pl-2 my-3 hover:shadow-sky-300"
                  type="text"
                  name="category"
                  id="category"
                  placeholder="category "
                />
              </div>
              <div className="flex flex-col w-full">
                <p className="ml-2 text-lg text-slate-700 font-semibold">
                  Quantity :
                </p>
                <input
                  className="w-full h-12 outline-0 shadow-md bg-slate-50 rounded-md hover:shadow-sky-300 pl-2 my-3"
                  type="number"
                  name="quantity"
                  id="quantity"
                  defaultValue={"1"}
                  placeholder="quantity"
                />
              </div>
              {/* price field */}
              <div className="flex flex-col w-full">
                <p className="ml-2 text-lg text-slate-700 font-semibold">
                  Price :
                </p>
                <input
                  className="w-full h-12 outline-0 shadow-md bg-slate-50 rounded-md hover:shadow-sky-300 pl-2 my-3"
                  type="text"
                  defaultValue={"$" + "20"}
                  name="price"
                  id="price"
                  placeholder="price"
                />
              </div>
            </div>

            {/* image field */}
            <div className="my-8">
              <p className="ml-2 text-lg text-slate-700 font-semibold">
                Image Url
              </p>
              <input
                className="w-full h-12 outline-0 shadow-md bg-slate-50 rounded-md hover:shadow-sky-300 px-3 py-8 my-3"
                type="url"
                name="image"
                id="image"
                placeholder="Product image link"
              />
            </div>
            <div className="flex items-center gap-5">
              <div className="my-8 w-full">
                <p className="ml-2 text-lg text-slate-700 font-semibold">
                  Email:
                </p>
                <input
                  className="w-full h-12 outline-0 shadow-md bg-slate-50 rounded-md hover:shadow-sky-300 px-3 py-8 my-3"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Admin email"
                  defaultValue={user?.email}
                />
              </div>
              <div className="my-8 w-full">
                <p className="ml-2 text-lg text-slate-700 font-semibold">
                  Name:
                </p>
                <input
                  className="w-full h-12 outline-0 shadow-md bg-slate-50 rounded-md hover:shadow-sky-300 px-3 py-8 my-3"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="name"
                  defaultValue={user?.displayName}
                />
              </div>
            </div>
          </div>
          <div className="text-center">
            <button className="btn-primary" type="submit">
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
