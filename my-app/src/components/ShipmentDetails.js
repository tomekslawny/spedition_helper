import React, { useContext } from "react";
import { ShipmentContext } from "../contexts/ShipmentContext";
import DeleteIcon from "@material-ui/icons/Delete";
import ToggleButtons from "./ToggleButtons";

const ShipmentDetails = ({ shipment }) => {
  const { removeShipment } = useContext(ShipmentContext);

  return (
    <li>
      <div className="trader">{shipment.trader}</div>
      <div className="client">{shipment.client}</div>
      <div className="haulier">{shipment.haulier}</div>
      <div className="route">{shipment.route}</div>
      <div className="goods">{shipment.goods}</div>
      <div className="loadingDate">
        {JSON.stringify(shipment.selectedLoadingDate).slice(1, 11)}
      </div>
      <div className="unloadingDate">
        {JSON.stringify(shipment.selectedUnloadingDate).slice(1, 11)}
      </div>
      <ToggleButtons />
      <div className="notes">{shipment.notes}</div>
      <DeleteIcon
        onClick={() => removeShipment(shipment.id)}
        cursor="pointer"
      />
    </li>
  );
};

export default ShipmentDetails;
