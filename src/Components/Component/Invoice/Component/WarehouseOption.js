import React from 'react';

export default function WarehouseOption() {
  return  <div class="input-group mb-3" id="inputGroupSelect02">
  <select style={{ width: "100%", padding: "2%" }}>
    <option selected>Warehouse</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>;
}
