import React, { useContext } from "react";
import CustomerOption from "./Component/CustomerOption";
import WarehouseOption from "./Component/WarehouseOption";
import SearchOption from "./Component/SearchOption";
import InvoiceTable from "./Component/InvoiceTable";
import OrderPart from "./Component/OrderPart";
import "./Style/InvoiceStyle.css";
import { DataContext } from "../../ContextAPI/DataProcessing";
export default function Invoice() {
  return (
    <div className="px-4 mt-2">
      <div className="row g-4">
        <div className="col-md-12 col-sm-12 mainDiv">
          <CustomerOption />
          <WarehouseOption />
          <SearchOption />
          <InvoiceTable/>
          <OrderPart/>
        </div>
      </div>
    </div>
  );
}
