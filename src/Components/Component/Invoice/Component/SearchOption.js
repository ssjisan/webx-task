import React, { useContext } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { DataContext } from "../../../ContextAPI/DataProcessing";
import "./Style/SearchOptionStyle.css";
export default function SearchOption() {
  const {handleOnChange} = useContext(DataContext)
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Scan/Search product by name/code"
        onChange={handleOnChange}
      />
      <div className="input-group-append">
        <span className="input-group-text span" id="basic-addon2">
          <BsPlusCircleFill className="icon" />
        </span>
      </div>
    </div>
  );
}
