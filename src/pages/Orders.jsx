import React from "react";
import { Header } from "../components";

const Orders = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl w-[100%]">
      <Header category="Page" title="Tasks" />
      <div className="table-responsive" style={{ overflowX: "auto" }}>
        <table className="table">
          <thead>
            <tr>
              <tr className="flex justify-between">
                <td>NAME</td>
                <td>Phone</td>
                <td>Item</td>
                <td>Problem Type</td>
                <td>Date</td>
                <td>Amount</td>
                <td>Status</td>
                <td></td>
              </tr>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Orders;
