import React, { Component } from "react";

/**
 * This function adds an item using a POST request
 * @param {*} props
 */
const UserForm3 = props => {
  return (
    <form onSubmit={props.addItem}>
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
      <button>Add new Item</button>
    </form>
  );
};

export default UserForm3;
