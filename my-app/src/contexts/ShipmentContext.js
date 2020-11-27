import React, { createContext, useState } from "react";
import { v1 as uuidv1 } from "uuid";

export const ShipmentContext = createContext();

const ShipmentContextProvider = (props) => {
  const [shipments, setShipments] = useState([
    {
      trader: "Tommy Slavko",
      client: "Loyal Cargo Solutions",
      route: "DE 12 - PL 15",
      goods: "2 pal 120x80 300kg",
      id: uuidv1(),
      haulier: "Kris-Trans",
      notes: "dodać CMR",
      selectedLoadingDate: new Date(),
      selectedUnloadingDate: new Date(),
    },
    {
      trader: "Filipek",
      client: "Gerex",
      route: "NL 25 - HU 83",
      goods: "4 pal 1 tona",
      id: uuidv1(),
      haulier: "Marpol",
      notes: "odprawa celna",
      selectedLoadingDate: new Date(),
      selectedUnloadingDate: new Date(),
    },
  ]);
  const addShipment = (
    trader,
    client,
    route,
    goods,
    haulier,
    notes,
    selectedLoadingDate,
    selectedUnloadingDate
  ) => {
    setShipments([
      ...shipments,
      {
        trader,
        client,
        route,
        goods,
        haulier,
        notes,
        id: uuidv1(),
        selectedLoadingDate,
        selectedUnloadingDate,
      },
    ]);
  };
  const removeShipment = (id) => {
    setShipments(shipments.filter((shipment) => shipment.id !== id));
  };

  return (
    <ShipmentContext.Provider
      value={{ shipments, addShipment, removeShipment }}
    >
      {props.children}
    </ShipmentContext.Provider>
  );
};

export default ShipmentContextProvider;
