import React from "react";
import CustomerOption from "./Component/CustomerOption";
import WarehouseOption from "./Component/WarehouseOption";
import SearchOption from "./Component/SearchOption";
import InvoiceTable from "./Component/InvoiceTable";
import OrderPart from "./Component/OrderPart";
import "./Style/InvoiceStyle.css"
export default function Invoice({ order, handleRemove, total, handleOrder }) {
  return (
    <div class="px-4 mt-2">
      <div class="row g-4">
        <div class="col-md-12 col-sm-12" className="mainDiv"> 
          <CustomerOption />
          <WarehouseOption />
          <SearchOption />
          <InvoiceTable
            order={order}
            handleRemove={handleRemove}
            total={total}
          />
          <OrderPart handleOrder={handleOrder} />
        </div>
      </div>
    </div>
  );
}
