import React, { useContext } from "react";
import ShipmentDetails from "./ShipmentDetails";
import { ShipmentContext } from "../contexts/ShipmentContext";

const Shipments = () => {
  const { shipments } = useContext(ShipmentContext);

  return shipments.length ? (
    <div className="container">
      <ul>
        {shipments
          .sort((a, b) => b.selectedUnloadingDate - a.selectedUnloadingDate)
          .map((shipment) => {
            console.log(shipment);
            return <ShipmentDetails shipment={shipment} key={shipment.id} />;
          })}
      </ul>
    </div>
  ) : (
    <div className="container">Nie masz żadnych ładunków</div>
  );
};

export default Shipments;
