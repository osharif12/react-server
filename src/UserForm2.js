import React, { Component } from "react";

/**
 * This function is a form for post request, adding List
 * @param {*} props
 */
const UserForm2 = props => {
  return (
    <form onSubmit={props.addList}>
      <input
        style={{ margin: "20px auto", display: "block" }}
        type="text"
        name="listname"
      />
      <button>Add new List</button>
    </form>
  );
};

export default UserForm2;
