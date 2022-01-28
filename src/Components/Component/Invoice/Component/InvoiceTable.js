import React, { useContext, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import "./Style/InvoiceTableStyle.css";
import { DataContext } from "../../../ContextAPI/DataProcessing";

export default function InvoiceTable() {
  const { order, handleRemove, total } = useContext(DataContext)
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
        <tbody>
          {order?.map((data, i) => (
            <tr>
              <th scope="row">
                IT-{i + 1}-{data.productName}({data.details}) <BiEdit />
              </th>
              <td>{data.price}.00</td>
              <td>
                <input
                  defaultValue={1}
                  type="number"
                  min="1"
                  className="quantityBox"
                />
              </td>
              <td>{data.price}.00</td>
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
        <tr className="detailsTableHeading">
          <td className="dataTitle">Items</td>
          <td className="data">
            {order.length}({order.length}.00)
          </td>
          <td className="dataTitle">Total</td>
          <td className="data">{total}</td>
        </tr>
        <tr className="orderCountHeader">
          <td className="dataTitle">Order Tax</td>
          <td className="data">0.00</td>
          <td className="dataTitle">Discount</td>
          <td className="data">(0.00)0.00</td>
        </tr>
      </table>
      <table className="table table-borderless totalPayableTable">
        <tr>
          <td className="totalPayable">Total Payable</td>
          <td className="data">{total}.00</td>
        </tr>
      </table>
    </div>
  );
}
