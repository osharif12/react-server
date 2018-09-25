import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./navbar";
import axios from "axios";
import UserForm from "./UserForm";
import UserForm2 from "./UserForm2";
import UserForm3 from "./UserForm3";
import UserForm4 from "./UserForm4";
import UserForm5 from "./UserForm5";

class App extends Component {
  state = {
    lists: null,
    listAdded: null,
    itemAdded: null,
    itemUpdated: null,
    listDeleted: null
  };

  // Get request to retrieve list of todo categories
  retrieveList = e => {
    e.preventDefault(); // prevents the page from reloading when you hit submit button

    axios.get(`http://localhost:8000/list`).then(res => {
      const lists = res.data.map(r => r.title + ", ");
      this.setState({ lists });
      /*
      var lists = [];
      console.log("length of array is " + res.data.length);
      for (var i = 0; i < res.data.lenth; i++) {
        console.log("title is " + res.data[i].title);
        const l = {
          id: res.data[i].id,
          title: res.data[i].title
        };
        console.log(res.data[i].title);
        lists.push(l);
      }
      */
      //console.log(lists);
      //this.setState({ lists: lists });
    });
  };

  addList = e => {
    e.preventDefault();
    const listname = e.target.elements.listname.value;

    axios
      .post("http://localhost:8000/list/create", {
        title: listname
      })
      .then(function(response) {
        console.log(response);
        const listAdded = "list was successfully added";
        //this.setState({ listAdded: listAdded });
      })
      .catch(function(error) {
        console.log(error);
        const listAdded = "Error, list was not added";
        //this.setState({ listAdded: listAdded });
      });
  };

  addItem = e => {
    e.preventDefault();
    const itemId = e.target.elements.itemId.value;
    const content = e.target.elements.content.value;

    axios
      .post("http://localhost:8000/list/item/create", {
        id: itemId,
        content: content
      })
      .then(function(response) {
        console.log(response);
        const itemAdded = "item was successfully added";
        //this.setState({ itemAdded: itemAdded });
      })
      .catch(function(error) {
        console.log(error);
        const listAdded = "Error, list was not added";
        //this.setState({ listAdded: listAdded });
      });
  };

  updateItem = e => {
    e.preventDefault();
    const itemId = e.target.elements.itemId.value;
    const content = e.target.elements.content.value;

    axios
      .put("http://localhost:8000/list/item", {
        id: itemId,
        content: content
      })
      .then(function(response) {
        console.log(response);
        const itemUpdated = "item was successfully added";
        //this.setState({ itemUpdated: itemUpdated });
      })
      .catch(function(error) {
        console.log(error);
        const itemUpdated = "Error, list was not added";
        //this.setState({ itemUpdated: itemUpdated });
      });
  };

  deleteList = e => {
    e.preventDefault();
    const id = e.target.elements.id.value;

    axios
      .delete("http://localhost:8000/list/delete", {
        id: id
      })
      .then(function(response) {
        console.log(response);
        const listDeleted = "item was successfully added";
        //this.setState({ listDeleted: listDeleted });
      })
      .catch(function(error) {
        console.log(error);
        const listDeleted = "Error, list was not added";
        //this.setState({ listDeleted: listDeleted });
      });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="box">
          <UserForm retrieveList={this.retrieveList} />
          <p>List of todo categories: {this.state.lists} </p>

          <UserForm2 addList={this.addList} />
          <p> {this.state.listAdded} </p>

          <p>To add an item, enter its id and title below</p>
          <UserForm3 addItem={this.addItem} />
          <p> {this.state.itemAdded} </p>

          <p>To update an item, enter its id and title below</p>
          <UserForm4 updateItem={this.updateItem} />
          <p> {this.state.itemUpdated} </p>

          <p>To delete an item, enter its id below</p>
          <UserForm5 deleteList={this.deleteList} />
          <p> {this.state.listDeleted} </p>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
