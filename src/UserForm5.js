import React, { Component } from "react";

/**
 * This function deletes a list using a DELETE request
 * @param {*} props
 */
const UserForm5 = props => {
  return (
    <form onSubmit={props.deleteList}>
      <input
        style={{ margin: "20px auto", display: "block" }}
        type="text"
        name="id"
      />
      <button>Delete List</button>
    </form>
  );
};

export default UserForm5;
