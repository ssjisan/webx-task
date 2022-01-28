import React from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import "./Style/SearchOptionStyle.css";
export default function SearchOption() {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Scan/Search product by name/code"
      />
      <div className="input-group-append">
        <span className="input-group-text span" id="basic-addon2">
          <BsPlusCircleFill className="icon" />
        </span>
      </div>
    </div>
  );
}
