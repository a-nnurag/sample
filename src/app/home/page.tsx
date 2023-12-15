import React from "react";

import AboutUs from "./Aboutus";
import Contactus from "./Contactus";
import Events from "./Events";
import Gallery from "./Gallery";
import Gifpage from "./Gifpage";
import Initiative from "./Initiative";
import Ourteam from "./Ourteam";

const page = () => {
  return (
    <div>
      <Gifpage />
      <Contactus />
      <AboutUs />
      <Initiative />
      <Events />
      <Gallery />
      <Ourteam />
    </div>
  );
};

export default page;
