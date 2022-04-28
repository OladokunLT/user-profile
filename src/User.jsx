import React, { Component } from "react";
import "./User.css";
class User extends Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      getUserInfo: false,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // this confirmed that data is collected
        this.setState({
          users: data,
          getUserInfo: true,
        });
      });
  }
  render() {
    const { getUserInfo, users } = this.state;
    if (getUserInfo === false) return;
    <p> Internet connection is require to load your request.</p>;

    return (
      <div className="App">
        {users.map((user) => (
          <div key={user.id} className="card">
            <h1 className="font-family"> {user.name} </h1>
            <p className="decr"> {user.company.catchPhrase} </p>

            <h3 className="gen-info"> General Info </h3>
            <div className="d-flex">
              <div>
                <b>Address</b>
              </div>
              <div> {user.address.street} </div>
            </div>
            <div className="d-flex">
              <div>
                <b>Email</b>
              </div>
              <div> {user.email} </div>
            </div>
            <div className="d-flex">
              <div>
                <b>Phone</b>
              </div>
              <div> {user.phone} </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default User;
