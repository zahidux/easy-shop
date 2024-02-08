import React, { useEffect } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer";
import ScrollToTop from "../Components/ScrollToTop";

import AOS from "aos";
import "aos/dist/aos.css";
import Spinner from "../Components/Spinner ";

const Main = () => {
  const navigation = useNavigation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  let content;

  if (navigation.state === "loading") {
    content = <Spinner />;
  } else {
    content = <Outlet />;
  }

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <main>{content}</main>
      <Footer />
    </div>
  );
};

export default Main;
