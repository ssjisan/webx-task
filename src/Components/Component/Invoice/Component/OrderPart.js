import React, { useContext } from "react";
import { DataContext } from "../../../ContextAPI/DataProcessing";
import "./Style/OrderPartStyle.css";
export default function OrderPart() {
  const { handleOrder } = useContext(DataContext)
  return (
    <table class="table table-bordered">
      <thead>
        <tr>
          <td className="title" id="suspand">
            Suspand
          </td>
          <td className="title" id="order" onClick={handleOrder}>
            Order
          </td>
          <td className="title" id="payment" rowspan="2">
            Payment
          </td>
        </tr>
        <tr>
          <td className="title" id="cancel">
            Cancel
          </td>
          <td className="title" id="bill">
            Bill
          </td>
        </tr>
      </thead>
    </table>
  );
}
