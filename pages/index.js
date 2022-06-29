import React from "react";
import Featured from "../src/components/featured";
import Header from "../src/components/header";
import FeaturedCategory from "../src/components/featuredCategory";

const DefaultLayout = () => {
  return (
    <React.Fragment>
        <Header/>
      <Featured />
      <FeaturedCategory />
    </React.Fragment>
  );
};

export default DefaultLayout;
