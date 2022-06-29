import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const DefaultLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default DefaultLayout;
