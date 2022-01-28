import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import "./Style/InvoiceTableStyle.css"

export default function InvoiceTable({ order, handleRemove, total }) {
  return (
    <div >
      <table className="table table-bordered">
        <thead>
          <tr
            style={{
             
            }}
            className="tableHeading"
          >
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
                <button className="btn btn-link" onClick={() => handleRemove(i)}>
                  <AiOutlineClose />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className="table table-borderless">
        <tr className="detailsTableHeading" >
          <td style={{ textAlign: "left", padding: "2%" }}>Items</td>
          <td
            style={{
              fontWeight: "bold",
              textAlign: "right",
              padding: "2%",
            }}
          >
            {order.length}({order.length}.00)
          </td>
          <td style={{ textAlign: "left", padding: "2%" }}>Total</td>
          <td
            style={{
              fontWeight: "bold",
              textAlign: "right",
              padding: "2%",
            }}
          >
            {total}
          </td>
        </tr>
        <tr
          style={{
            borderTop: "2px solid #DEDEDD",
            backgroundColor: "#fff",
          }}
        >
          <td style={{ textAlign: "left", padding: "2%" }}>
            Order Tax
          </td>
          <td className="orderData">
            0.00
          </td>
          <td className="discount">
            Discount 
          </td>
          <td className="discountData">
            (0.00)0.00
          </td>
        </tr>
      </table>
      <table
        className="table table-borderless totalPayableTable">
        <tr>
          <td className="totalPayable">Total Payable</td>
          <td className="totalPayableData">
            {total}.00
          </td>
        </tr>
      </table>
    </div>
  );
}
