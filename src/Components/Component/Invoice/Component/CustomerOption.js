import React from "react";
import { BsPlusCircleFill, BsEye,BsPencil } from "react-icons/bs";
import "./Style/CustomerOptionStyle.css";
export default function CustomerOption() {
  return (
    <div className="input-group mb-3">
      <select
        className="custom-select select"
        id="select"
      >
        <option selected>Walk in customer</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <div className="input-group-append buttonGroup">
        <label className="input-group-text">
          <BsPencil className="buttonIcon" />
        </label>
        <label className="input-group-text">
          <BsEye className="buttonIcon" />
        </label>
        <label className="input-group-text">
          <BsPlusCircleFill className="buttonIcon" />
        </label>
      </div>
    </div>
  );
}
