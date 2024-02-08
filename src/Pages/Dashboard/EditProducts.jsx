import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const EditProducts = () => {
  const product = useLoaderData();

  console.log(product);

  const { user } = useContext(AuthContext);
  const { _id, title, description, price, category, image, quantity, email } =
    product;

  //from submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const title = from.title.value;
    const description = from.description.value;
    const category = from.category.value;
    const price = from.price.value;
    const image = from.image.value;
    const email = from.email.value;

    if (isNaN(price)) {
      return Swal.fire("Price should be number");
    }

    if (parseFloat(quantity)) {
      return Swal.fire("Quantity should be number");
    }

    const update = { title, description, category, price, image, email };
    console.log(update);

    fetch(`http://localhost:5000/myProducts/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          Swal.Fire("Product Update Success!");
        }
      });
  };
  return (
    <div className="py-16 bg-slate-100 ">
      <h2 className="text-3xl text-center font-semibold text-sky-600">
        Update - {title}
      </h2>
      <div className=" w-10/12 md:w-8/12 mx-auto my-12 shadow-lg  rounded-xl py-16 px-12">
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <p
                htmlFor="Title"
                className="ml-2 text-lg text-slate-700 font-semibold"
              >
                Title :
              </p>
              <input
                className="w-full h-12 outline-0 shadow-md bg-slate-50 rounded-md  pl-3 py-8 my-3 hover:shadow-sky-300"
                type="text"
                name="title"
                id="title"
                defaultValue={title}
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
                defaultValue={description}
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
                  defaultValue={category}
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
                  defaultValue={quantity}
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
                  defaultValue={price}
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
                defaultValue={image}
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
                  defaultValue={email}
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProducts;
