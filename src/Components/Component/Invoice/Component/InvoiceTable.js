import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
export default function InvoiceTable({ order, handleRemove, total }) {
  return (
    <div>
      <table class="table table-bordered">
        <thead>
          <tr
            style={{
              backgroundColor: "#3B7FC5",
              color: "white",
              borderBottom: "2px solid transparent",
            }}
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
        <tbody style={{height:"300px"}}>
          {order?.map((data, i) => (
            <tr>
              <th scope="row">
                IT-{i + 1}-{data.productName} <BiEdit />
              </th>
              <td>{data.price}.00</td>
              <td>1</td>
              <td>{data.price}.00</td>
              <td>
                <AiOutlineClose
                  onClick={() => handleRemove(i)}
                  style={{ cursor: "pointer" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <table class="table table-borderless" style={{ marginBottom: 0}}>
        <tr
          style={{
            borderTop: "2px solid #DEDEDD",
            backgroundColor: "#fff",
          }}
        >
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
            Order Tax <BiEdit />
          </td>
          <td
            style={{
              fontWeight: "bold",
              textAlign: "right",
              padding: "2% 2% 0% 2%",
            }}
          >
            0.00
          </td>
          <td style={{ textAlign: "left", padding: "2%" }}>
            <BiEdit />
          </td>
          <td
            style={{
              fontWeight: "bold",
              textAlign: "right",
              padding: "2%",
            }}
          >
            (0.00)0.00
          </td>
        </tr>
      </table>
      <table
        class="table table-borderless"
        style={{
          backgroundColor: "black",
          color: "white",
          margin: 0,
        }}
      >
        <tr>
          <td style={{ padding: "2%" }}>Total Payable</td>
          <td
            style={{
              fontWeight: "bold",
              textAlign: "right",
              padding: "2%",
            }}
          >
            {total}.00
          </td>
        </tr>
      </table>
      
    </div>
  );
}
