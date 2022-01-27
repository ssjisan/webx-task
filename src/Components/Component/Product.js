import React from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

export default function Product({ product, handleAdd }) {
  return (
    <div class="px-4 mt-2">
      <div class="row g-4">
        {product.map((data) => (
          <div
            class="col-lg-3 col-md-3 col-sm-3"
            style={{ cursor: "pointer", width: "9.2rem" }}
          >
            <div class="p-1 card" onClick={() => handleAdd(data.id)}>
              <img
                src={data.imgUrl}
                class="card-img-top"
                alt={data.productName}
              />
              <p class="card-text">{data.productName}</p>
            </div>
          </div>
        ))}
        <div class="row g-4" style={{ marginTop: "50%" }}>
          {" "}
          <div
            class="col-4 col-sm-4 col-md-4 col-lg-4"
            style={{ backgroundColor: "#78A6D4", display:"flex",justifyContent:"center",alignItems: "center"}}
          >
            <IoChevronBackOutline style={{color:"white"}}/>
          </div>
          <div
            class="col-4 col-sm-4 col-md-4 col-lg-4"
            style={{ backgroundColor: "#3A7EC2", display:"flex",justifyContent:"center",alignItems: "center",padding: ".5%"}}
          >
            {" "}
            <p style={{color:"white",fontWeight:"bold"}}>Sell Gift Card</p>{" "}
          </div>{" "}
          <div
            class="col-4 col-sm-4 col-md-4 col-lg-4"
            style={{ backgroundColor: "#78A6D4", display:"flex",justifyContent:"center",alignItems: "center"}}
          >
            <IoChevronForwardOutline style={{color:"white"}}/>
          </div>
        </div>
      </div>
    </div>
  );
}
