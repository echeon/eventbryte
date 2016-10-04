import React from 'react';
import { Link, hashHistory } from 'react-router';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  handleChange(prop) {
    return (e) => {
      e.preventDefault();
      this.setState({ [prop]: e.currentTarget.value });
    };
  }

  componentDidUpdate() {
    if (this.props.loggedIn) {
      hashHistory.push("/");
    }
  }

  render() {
    let header, otherHeader, link, errors;

    if (this.props.formType === 'login') {
      header = "Log in";
      otherHeader = "login";
      link = <Link to="/signup">Sign Up</Link>;
    } else {
      header = "Sign up";
      otherHeader = "signup";
      link = <Link to="/login">Log In</Link>;
    }

    if (this.props.errors.length) {
      errors = (
        <ul>
          { this.props.errors.map( (error, i) => <li key={i}>{error}</li> ) }
        </ul>
      );
    }

    return (
      <div>
        <h1>{header}</h1>
        <span>Please {otherHeader} or {link} instead</span>
        {errors}
        <form onSubmit={this.handleSubmit}>
          Username <input type="text" onChange={this.handleChange("username")}/><br/>
          Password <input type="password" onChange={this.handleChange("password")}/><br/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
