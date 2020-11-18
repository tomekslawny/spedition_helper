import React from "react";
import NavBarTop from "./NavBarTop";
import NavBarLeft from "./NavBarLeft";
import Shipments from "./Shipments";
import ShipmentContextProvider from "../contexts/ShipmentContext";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <NavBarTop />
        <ShipmentContextProvider>
          <div className="flexRow">
            <NavBarLeft />
            <Shipments />
          </div>
        </ShipmentContextProvider>
      </section>
    </>
  );
};

export default Hero;
