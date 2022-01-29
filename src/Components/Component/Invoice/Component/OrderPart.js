import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { DataContext } from "../../../ContextAPI/DataProcessing";
import "react-toastify/dist/ReactToastify.css";
import "./Style/OrderPartStyle.css";
import BillCopy from "./BillCopy";

import { FaRegMoneyBillAlt } from "react-icons/fa";

export default function OrderPart() {
  const { openBill, handleOrder, notify, modalIsOpen } =
    useContext(DataContext);

  return (
    <div>
      <ToastContainer />
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td className="title" id="suspand">
              Suspand
            </td>
            <td className="title" id="order" onClick={handleOrder}>
              Order
            </td>
            <td className="title" id="payment" rowSpan="2">
              <FaRegMoneyBillAlt /> Payment
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
        </tbody>
        {modalIsOpen && <BillCopy />}
      </table>
    </div>
  );
}
