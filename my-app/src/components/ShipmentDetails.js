import React, { useContext } from "react";
import { ShipmentContext } from "../contexts/ShipmentContext";
import DeleteIcon from "@material-ui/icons/Delete";
import ToggleButtons from "./ToggleButtons";

const ShipmentDetails = ({ shipment }) => {
  const { removeShipment } = useContext(ShipmentContext);

  return (
    <li>
      <div className="item">{shipment.trader}</div>
      <div className="item">{shipment.client}</div>
      <div className="item">{shipment.haulier}</div>
      <div className="item">{shipment.route}</div>
      <div className="item">{shipment.goods}</div>
      <div className="item">
        {shipment.selectedLoadingDate.toISOString().slice(0, 10)}
      </div>
      <div className="item">
        {shipment.selectedUnloadingDate.toISOString().slice(0, 10)}
      </div>
      <ToggleButtons />
      <div className="item">{shipment.notes}</div>
      <DeleteIcon
        onClick={() => removeShipment(shipment.id)}
        cursor="pointer"
      />
    </li>
  );
};

export default ShipmentDetails;
