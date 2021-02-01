import React, { componantes } from "react";

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

    this.stateState({
      submitte: true,
    });
  };

  render() {
    if (this.state.submitted) {
      return (
        <div className="Contact">
          <p>
            Thank you, {this.state.fromData.firstName}, for submitting the from.
          </p>
          <button onClick={this.resetform}>Reset from</button>
        </div>
      );
    }

    resetform = (event) => {
      this.setState({
        submitte: false,
        fromData: {
          firstName: "",
          lastName: "",
        },
      });
    };
    return (
      <div className="Contact">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="fristName"></label>
            <input
              type="text"
              name="firstName"
              value={this.state.fromData.firstName}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="lastName">Last tName</label>
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
