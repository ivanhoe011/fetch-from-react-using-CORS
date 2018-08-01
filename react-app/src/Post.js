import React, { Component } from "react";

export default class Posts extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    let dataURL = "http://localhost/test.php";
    fetch(dataURL)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({
          users: response.users,
        });
      });
  }
  render() {
  	console.log(this.state);
    let users = this.state.users.map((user, index) => {
      return (
        <div key={index}>
          <h2>Title: {user.id}</h2>
          <h2>Title: {user.name}</h2>
          <h2>Title: {user.email}</h2>
          <h2>Title: {user.title}</h2>
          <h2>Title: {user.body}</h2>
        </div>
      );
    });

    return (
      <div>
        <h2>Lista korisnika</h2>
        <p>{users}</p>
      </div>
    );
  }
}
