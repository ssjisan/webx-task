import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

export default function Invoice({ order, handleRemove }) {
  return (
    <div class="px-4 mt-2">
      <div class="row g-4">
        <div class="col-md-12 col-sm-12" style={{ cursor: "pointer" }}>
          <table class="table">
            <thead>
              <tr
                style={{
                  backgroundColor: "#3B7FC5",
                  color: "white",
                  borderBottom: "2px solid transparent",
                }}
              >
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Qty</th>
                <th scope="col">Subtotal</th>
                <th scope="col">
                  <RiDeleteBin6Line />
                </th>
              </tr>
            </thead>
            <tbody>
              {order?.map((data, i) => (
                <tr>
                  <th scope="row">
                    IT-{i + 1}-{data.productName}
                  </th>
                  <td>{data.price}.00</td>
                  <td>1</td>
                  <td>{data.price}.00</td>
                  <td>
                    <AiOutlineClose onClick={() => handleRemove(i)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <table class="table table-borderless">
            <td>Items</td>
            <td style={{fontWeight:"bold"}}>{order.length}({order.length}.00)</td>
            <td>Total</td>
            <td>1</td>
          </table>
        </div>
      </div>
    </div>
  );
}
