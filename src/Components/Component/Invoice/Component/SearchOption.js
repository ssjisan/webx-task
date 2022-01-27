import React from 'react';
import { BsPlusCircleFill } from "react-icons/bs";
export default function SearchOption() {
  return <div class="input-group mb-3">
  <input
    type="text"
    class="form-control"
    placeholder="Scan/Search product by name/code"
  />
  <div class="input-group-append">
    <span
      class="input-group-text"
      id="basic-addon2"
      style={{ height: "100%" }}
    >
      <BsPlusCircleFill style={{ color: "#4FB7D7" }} />
    </span>
  </div>
</div>

}
