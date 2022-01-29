import React, { useContext, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineClose,AiOutlineEye } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import "./Style/InvoiceTableStyle.css";
import { DataContext } from "../../../ContextAPI/DataProcessing";
import { ToastContainer } from "react-toastify";
import ViewProduct from "./ViewProduct";

export default function InvoiceTable() {
  const { order, handleRemove, total, manualInput,productView,productModalIsOpen } = useContext(DataContext);
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr className="tableHeading">
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Subtotal</th>
            <th>
              <RiDeleteBin6Line />
            </th>
          </tr>
        </thead>
        <tbody style={{ height: "330px" }}>
          {order?.map((data, i) => (
            <tr key={data.id}>
              <th scope="row">
                IT-{i + 1}-{data.productName}({data.details}) <AiOutlineEye onClick={()=>productView(data.id)}/> <BiEdit />
              </th>
              <td>
                {data.price
                  .toFixed(2)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </td>
              <td>
                <input
                  defaultValue={1}
                  type="number"
                  min="1"
                  className="quantityBox"
                  onChange={()=>manualInput(i)}
                />
              </td>
              <td>
                {data.price
                  .toFixed(2)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </td>
              <td>
                <button
                  className="btn btn-link"
                  
                  onClick={() => handleRemove(i)}
                >
                  <AiOutlineClose />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className="table table-borderless">
        <tbody>
          <tr className="detailsTableHeading">
            <td className="dataTitle">Items</td>
            <td className="data">
              {order.length}({order.length.toFixed(2)})
            </td>
            <td className="dataTitle">Total</td>
            <td className="data">
              {total
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </td>
          </tr>
          <tr className="orderCountHeader">
            <td className="dataTitle">Order Tax</td>
            <td className="data">0.00</td>
            <td className="dataTitle">Discount</td>
            <td className="data">(0.00)0.00</td>
          </tr>
        </tbody>
      </table>
      <table className="table table-borderless totalPayableTable">
        <tbody>
          <tr>
            <td className="totalPayable">Total Payable</td>
            <td className="data">
              {total
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </td>
          </tr>
        </tbody>
      </table>
      <ToastContainer />
      {productModalIsOpen && <ViewProduct/>}
    </div>
  );
}
