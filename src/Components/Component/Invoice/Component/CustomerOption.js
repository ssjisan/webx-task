import React from "react";
import { BsPlusCircleFill,BsEye } from "react-icons/bs";
import { GrEdit } from "react-icons/gr";

export default function CustomerOption() {
  return (
    <div class="input-group mb-3">
      <select
        class="custom-select "
        id="inputGroupSelect02"
        style={{ width: "76%", padding: "2%" }}
      >
        <option selected>Walk in customer</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <div class="input-group-append" style={{ display: "flex" }}>
        <label class="input-group-text" for="inputGroupSelect02">
          <GrEdit style={{ color: "#4FB7D7" }} />
        </label>
        <label class="input-group-text" for="inputGroupSelect02">
          <BsEye style={{ color: "#4FB7D7" }} />
        </label>
        <label class="input-group-text" for="inputGroupSelect02">
          <BsPlusCircleFill style={{ color: "#4FB7D7" }} />
        </label>
      </div>
    </div>
  );
}
