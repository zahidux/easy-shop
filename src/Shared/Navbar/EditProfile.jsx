import React, { useContext, useRef } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const EditProfile = () => {
  const nameRef = useRef(null);
  const photoRef = useRef(null);
  const { user, profileUpdate } = useContext(AuthContext);

  const updateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;

    profileUpdate(user, name, photo)
      .then(() => {
        alert("Profile Updated Successfully");
      })
      .then((error) => {
        console.log(error.message);
      });
  };
  return (
    <section className="py-16">
      <div className="container">
        <div
          data-aos="fade-up"
          className="w-[450px] mx-auto rounded-lg shadow-custom p-6"
        >
          <h1 className="text-center text-3xl font-bold mb-10 text-navy drop-shadow-lg">
            Edit your profile
          </h1>

          <form onSubmit={updateProfile}>
            {/* Email field */}
            <div className="flex flex-col w-full">
              <input
                ref={nameRef}
                onClick={() =>
                  nameRef.current.setSelectionRange(
                    0,
                    nameRef.current.value.length
                  )
                }
                id="name"
                className="w-full  border-0 outline-none  pl-4 py-3 mt-1 rounded-lg shadow-xl bg-slate-200"
                type="text"
                name="name"
                defaultValue={user?.displayName}
                placeholder="Enter your full name"
              />
            </div>

            {/* photo url field */}
            <div className="flex flex-col w-full mt-3">
              <input
                ref={photoRef}
                onClick={() =>
                  photoRef.current.setSelectionRange(
                    0,
                    photoRef.current.value.length
                  )
                }
                id="photo"
                className="w-full border-0  outline-none px-4 py-3 mt-3 rounded-lg shadow-xl bg-slate-200"
                type="text"
                name="photo"
                defaultValue={user?.photoURL}
                placeholder="Photo URL"
              />
            </div>

            <button type="submit" className="btn-primary w-full mt-10">
              Update
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditProfile;
