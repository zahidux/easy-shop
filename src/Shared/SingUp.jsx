import React, { useContext } from "react";
import signUp from "../assets/signup.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const { signUpUser, profileUpdate } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handelSingUp = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    const confirmPassword = from.confirmPassword.value;
    const user = { name, email, password, confirmPassword };
    console.log(user);
    signUpUser(email, password)
      .then((result) => {
        navigate("/");
        profileUpdate(result.user, name);
        const currentUser = result.user;
        console.log(currentUser);
        from.reset();
      })
      .then((error) => {
        console.log(error);
      });
    //password validation
    if (password > 6) {
      Swal.fire("The password is less then 6 characters.");
      return;
    }
    if (password !== confirmPassword) {
      Swal.fire("Password doesn't match");
      return;
    }
  };

  return (
    <div className="container flex items-center gap-24 py-16">
      <img src={signUp} alt="" />
      <div className="bg-slate-200 p-10 rounded-xl shadow-xl w-5/12">
        <h3 className="text-3xl text-center font-semibold mb-8">Sing Up</h3>
        <div>
          <form onSubmit={handelSingUp}>
            <div>
              <input
                type="name"
                name="name"
                id="name"
                required
                className="w-full outline-0 pl-3 py-2 rounded-xl shadow-xl"
                placeholder="Name"
              />
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full outline-0 mt-5 pl-3 py-2 rounded-xl shadow-xl"
                placeholder="Email"
              />
              <input
                type="password"
                name="password"
                id="password"
                required
                className="w-full outline-0 mt-5 pl-3 py-2 rounded-xl shadow-xl"
                placeholder="Password"
              />
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                required
                className="w-full outline-0 mt-5 mb-8 pl-3 py-2 rounded-xl shadow-xl"
                placeholder="Confirm Password"
              />

              <button className="btn-primary w-full mb-5">Sign Up</button>

              <Link to={"/login"}>
                <p className="text-center">Have an account ! Login Please</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
