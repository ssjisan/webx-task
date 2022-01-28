import React, { useContext } from "react";
import Modal from 'react-modal';
import { DataContext } from "../../../ContextAPI/DataProcessing";

export default function BillCopy() {
  const {modalIsOpen,closeModal,order,handleOrder} =useContext(DataContext)
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  return (
    <Modal
        isOpen={modalIsOpen}
        style={customStyles}

      >
        <table className="table table-bordered">
        <thead>
          <tr className="tableHeading">
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody style={{height:"330px"}}>
          {order?.map((data, i) => (
            <tr>
              <th scope="row">
                IT-{i + 1}-{data.productName}({data.details})
              </th>
              <td>{data.price}.00</td>
              <td>
                1
              </td>
              <td>{data.price}.00</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={closeModal} className="btn btn-info">Return</button>
      <button onClick={handleOrder} className="btn btn-success">Confirm Order</button>
      </Modal>
  );
}
