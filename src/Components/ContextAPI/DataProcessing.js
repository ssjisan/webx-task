import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import data from "../../Assets/Product.json";

export const DataContext = createContext();
export default function DataProcessing({ children }) {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
  // eslint-disable-next-line no-unused-vars
  const [product, setProduct] = useState(data);
  const [order, setOrder] = useState([]);
  const [search, setSearch] = useState("");
  const [total, setTotal] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [productModalIsOpen, setProductModalIsOpen] = useState(false);
  const [viewProduct, setViewProduct] = useState([]);
  const handleAdd = (id) => {
    let newArray = [];
    let array = product.find((data) => data.id === +id);
    newArray.unshift(array, ...order);
    setOrder(newArray);
    setSearch("");
    localStorage.setItem("orderItems", JSON.stringify(newArray));
    localStorage.getItem("orderItems");
  };
  const handleRemove = (index) => {
    let newArray = order.filter((data, i) => i !== +index);
    setOrder(newArray);
    toast.info("Product removed", {
      theme: "colored",
    });
  };
  useEffect(() => {
    let total = 0;
    for (let i = 0; i < order.length; i++) {
      total = total + order[i].price;
    }
    setTotal(total);
  }, [order]);
  const handleOrder = () => {
    if (order.length <= 0) {
      swalWithBootstrapButtons.fire({
        icon: "info",
        title: "Sorry",
        text: "You dont choose anything for order",
        confirmButtonText: "Okay",
        timer: 2000,
      });
    } else {
      setIsOpen(false);
      setOrder([]);
      localStorage.removeItem("orderItems");
      Swal.fire({
        icon: "success",
        title: "The Order is Saved Successfully",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  const notify = () => {
    if (order.length <= 0) {
      toast.warn("Nothing to suspand", {
        theme: "colored",
      });
    } else {
      toast.success("Order suspand", {
        theme: "colored",
      });
      setOrder([]);
    }
  };
  const suspand = () => {
    if (order.length <= 0) {
      toast.warn("Nothing to suspand", {
        theme: "colored",
      });
    } else {
      toast.success("Order suspand", {
        theme: "colored",
      });
      setOrder([]);
    }
  };
  const handleOnChange = (event) => {
    setSearch(event.target.value);
  };
  const openBill = () => {
    if (order.length <= 0) {
      toast.warn("No bill to show", {
        theme: "colored",
      });
    } else {
      setIsOpen(true);
    }
  };
  const closeModal = () => {
    setProductModalIsOpen(false)
    setIsOpen(false);
  };
  const productView=(id)=>{
    let newArray= product.filter((data=>
      data.id === +id
    ))
    setViewProduct(newArray)
    setProductModalIsOpen(true)
  }
  return (
    <DataContext.Provider
      value={{
        product,
        handleAdd,
        order,
        handleRemove,
        total,
        handleOrder,
        notify,
        search,
        handleOnChange,
        openBill,
        setIsOpen,
        modalIsOpen,
        closeModal,
        suspand,
        productView,
        productModalIsOpen,
        viewProduct
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
