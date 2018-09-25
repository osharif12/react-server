import React, { Component } from "react";

/**
 * This function is a get request for getting the list table
 * @param {} props
 */
const UserForm = props => {
  return (
    <form onSubmit={props.retrieveList}>
      <button>Retrieve list of todo Items</button>
    </form>
  );
};

/*
const UserForm = props => {
  return (
    <form onSubmit={props.getUser}>
      <input
        style={{ margin: "20px auto", display: "block" }}
        type="text"
        name="username"
      />
      <button>Submit</button>
    </form>
  );
};
*/
export default UserForm;
