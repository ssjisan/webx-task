import React, { useState, useEffect } from "react";
import Product from "./Component/Product";
import Invoice from "./Component/Invoice/Invoice";
import Swal from "sweetalert2";
import DataProcessing from "./ContextAPI/DataProcessing";
export default function Pos() {
  return (
    <div className="px-4 mt-2">
      <DataProcessing>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="p-3 border bg-light">
              <Invoice />
            </div>
          </div>
          <div className="col-lg-8 col-md-6 col-sm-6">
            <div className="p-3 border bg-light">
              <Product />
            </div>
          </div>
        </div>
      </DataProcessing>
    </div>
  );
}
