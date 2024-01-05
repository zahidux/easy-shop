import React, { useContext, useRef } from "react";
import signUp from "../assets/signup.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import google from "../assets/google.png";
import { FaGithub } from "react-icons/fa";
import Swal from "sweetalert2";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { app } from "../firebase/firebase.config";
const auth = getAuth(app);
const Login = () => {
  const { login, profileUpdate, googleSignIn, githubSignIn } =
    useContext(AuthContext);

  const emailRef = useRef();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handelLogin = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    const user = { email, password };
    console.log(user);
    login(email, password)
      .then((result) => {
        profileUpdate(result.user);
        const currentUser = result.user;
        navigate("/");
        from.reset("");
      })
      .then((error) => {
        console.log(error);
      });
  };

  //google sign in
  const handelGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //github sign in

  const handelGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //forget password

  const handelResetPassword = (event) => {
    const email = emailRef.current.value;
    console.log(email);
    if (!email) {
      Swal.fire("Please provide your email address to reset password");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        Swal.fire("Please Check Your Email");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container flex items-center gap-24 py-16">
      <img src={signUp} alt="" />
      <div className="bg-slate-200 p-10 rounded-xl shadow-xl w-5/12">
        <h3 className="text-3xl text-center font-semibold mb-8">
          Please <span className="text-sky-600">Login</span>
        </h3>
        <div>
          <form onSubmit={handelLogin}>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                ref={emailRef}
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
              <button
                onClick={handelResetPassword}
                className="my-4 text-sm ml-2"
              >
                Forget Password
              </button>
              <button className="btn-primary w-full ">Login</button>
              <div className="flex items-center justify-center gap-5 my-5">
                <button onClick={handelGoogleSignIn}>
                  <img className="w-[25px]" src={google} alt="" />
                </button>
                <button onClick={handelGithubSignIn}>
                  <FaGithub className="text-2xl" />
                </button>
              </div>

              <Link to={"/signUp"}>
                <p className="text-center">New to Easy Shop ! Sing Up</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
