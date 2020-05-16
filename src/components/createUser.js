import React, { Component } from "react";

class CreateUser extends Component {
  render() {
    return (
      <div className="user-form">
        <h3 className="text-center  mt-3">User Details</h3>
        <form className="create-contact-form">
          <div className="create-contact-details">
            <input type="text" name="first_name" placeholder="First Name" />
            <input type="text" name="last_name" placeholder="Last Name" />
            <input type="email" name="email" placeholder="Email Address" />
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <input
              type="password"
              name="password2"
              placeholder="Password Confirm"
            />
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateUser;
