import React, { useContext } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { DataContext } from "../ContextAPI/DataProcessing";

export default function Product() {
  const { product, handleAdd,search } = useContext(DataContext);
  return (
    <div className="px-4 mt-2">
      <div className="row g-4">
        {product?.filter((data) => {
              if (search === "") {
                return data;
              } else if (
                data.productName
                  .toLowerCase()
                  .includes(search.toLowerCase())
              ) {
                return data;
              }
            }).map((data) => (
          <div
            className="col-lg-3 col-md-3 col-sm-3"
            style={{ cursor: "pointer", width: "9.2rem" }}
          >
            <div className="p-1 card" onClick={() => handleAdd(data.id)}>
              <img
                src={data.imgUrl}
                className="card-img-top"
                alt={data.productName}
              />
              <p className="card-text">{data.productName}</p>
            </div>
          </div>
        ))}
        <div className="row g-4" style={{ marginTop: "50%" }}>
          {" "}
          <div
            className="col-4 col-sm-4 col-md-4 col-lg-4"
            style={{
              backgroundColor: "#78A6D4",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IoChevronBackOutline style={{ color: "white" }} />
          </div>
          <div
            className="col-4 col-sm-4 col-md-4 col-lg-4"
            style={{
              backgroundColor: "#3A7EC2",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: ".5%",
            }}
          >
            {" "}
            <p style={{ color: "white", fontWeight: "bold" }}>
              Sell Gift Card
            </p>{" "}
          </div>{" "}
          <div
            className="col-4 col-sm-4 col-md-4 col-lg-4"
            style={{
              backgroundColor: "#78A6D4",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IoChevronForwardOutline style={{ color: "white" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
