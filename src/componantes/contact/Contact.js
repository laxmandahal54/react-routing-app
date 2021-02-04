import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitte: false,
      fromData: {
        firstName: "",
        lastName: "",
      },
    };
  }

  handleChange = (event) => {
    const fromData = { ...this.state.fromData };

    fromData[event.target.name] = event.target.value;

    this.setState({ fromData });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      submitte: true,
    });
  };
  Resetform = (event) => {
    this.setState({
      submitte: false,
      fromData: {
        firstName: "",
        lastName: "",
      },
    });
  };
  render() {
    if (this.state.submitted) {
      return (
        <div className="Contact">
          <p>
            Thank you, {this.state.fromData.firstName}, for submitting the from.
          </p>
          <button onClick={this.Resetform}>Reset from</button>
        </div>
      );
    }

    return (
      <div className="Contact">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="fristName">First Name </label>
            <input
              type="text"
              name="firstName"
              value={this.state.fromData.firstName}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={this.state.fromData.firstName}
              onChange={this.handleChange}
            />
          </div>

          <button>submit from</button>
        </form>
        <div>
          {this.state.fromData.firstName}
          <br />
          {this.state.fromData.lastName}
        </div>
      </div>
    );
  }
}

export default Contact;
