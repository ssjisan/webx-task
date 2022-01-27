import React from 'react';

export default function OrderPart({handleOrder}) {
  return <table class="table table-bordered">
  <thead>
    <tr>
      <td
        style={{
          backgroundColor: "#ECA341",
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
        }}
      >
        Suspand
      </td>
      <td
        style={{
          backgroundColor: "#4FB7D7",
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
        }}
        onClick={handleOrder}
      >
        Order
      </td>
      <td
        rowspan="2"
        style={{
          backgroundColor: "#51AD4E",
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
          verticalAlign: "middle",
        }}
      >
        Payment
      </td>
    </tr>
    <tr>
      <td
        style={{
          backgroundColor: "#D34943",
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
        }}
      >
        Cancel
      </td>
      <td
        style={{
          backgroundColor: "#3A7EC2",
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
        }}
      >
        Bill
      </td>
    </tr>
  </thead>
</table>;
}
