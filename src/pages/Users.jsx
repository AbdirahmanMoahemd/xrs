import React from "react";
import { Header } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const Users = () => {
  const onClickFn = () => {
    console.log("cliked");
  };
  const { currentColor } = useStateContext();
  const toolbarOptions = ["Search"];
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header
        category="Page"
        title="Users"
        currentColor={currentColor}
        btnText='Add User'
        onClick={onClickFn}
      />
      <div className="table-responsive " style={{ overflowX: "auto" }}>
        <table className="table">
          <thead>
            <tr>
              <td>ID</td>
              <td>NAME</td>
              <td>EMAIL</td>
              <td>ROLE</td>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
             
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
