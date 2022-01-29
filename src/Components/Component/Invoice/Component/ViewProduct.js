import React, { useContext } from "react";
import Modal from "react-modal";
import { DataContext } from "../../../ContextAPI/DataProcessing";

export default function ViewProduct() {
  const { productModalIsOpen, closeModal, viewProduct } =
    useContext(DataContext);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <Modal isOpen={productModalIsOpen} style={customStyles} ariaHideApp={false}>
     {viewProduct.map((data)=>
      <div className="p-1 card">
      <img
        src={data.imgUrl}
        className="card-img-top"
        alt={data.productName}
      />
       <div class="card-title">
          <h4>{data.productName}</h4>
          <h3>{data.price.toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
        </div>
        <button onClick={closeModal} className="btn btn-info">
          Return
        </button>
    </div>)}
    </Modal>
  );
}
