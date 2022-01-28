import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { DataContext } from "../../../ContextAPI/DataProcessing";
import "./Style/OrderPartStyle.css";
import "react-toastify/dist/ReactToastify.css";
import BillCopy from "./BillCopy";

export default function OrderPart() {
  const { openBill, handleOrder,notify,modalIsOpen } = useContext(DataContext);
  
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
          <td className="title" id="cancel" onClick={notify}>
            Cancel
          </td>
          <td className="title" id="bill" onClick={openBill}>
            Bill
          </td>
        </tr>
      </thead>
      <ToastContainer />
      {modalIsOpen && <BillCopy />}
    </table>
  );
}
