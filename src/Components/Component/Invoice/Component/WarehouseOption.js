import React from "react";
import "./Style/WarehouseOptionStyle.css";
export default function WarehouseOption() {
  return (
    <div className="input-group mb-3" id="inputGroupSelect02">
      <select className="select">
        <option value="0">Warehouse</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  );
}
