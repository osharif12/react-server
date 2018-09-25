import React, { Component } from "react";

/**
 * This function updates an item using a PUT request
 * @param {*} props
 */
const UserForm4 = props => {
  return (
    <form onSubmit={props.updateItem}>
      <input
        style={{ margin: "20px auto", display: "block" }}
        type="text"
        name="itemId"
      />
      <input
        style={{ margin: "20px auto", display: "block" }}
        type="text"
        name="content"
      />
      <button>Update new item</button>
    </form>
  );
};

export default UserForm4;
