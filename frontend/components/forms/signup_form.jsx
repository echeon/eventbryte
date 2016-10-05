import React from 'react';

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  handleChange(prop) {
    return e => {
      e.preventDefault();
      this.setState({ [prop]: e.currentTarget.value });
    };
  }

  handleGuestLogin(e) {
    e.preventDefault();
    const guest = {username: "guest", password: "password"};
    this.props.login(guest);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signup(user);
  }

  render() {
    return (
      <form className='user-info-form' onSubmit={this.handleSubmit}>
        <h2>Sign up</h2>
        <input type="text"
               placeholder="Username"
               onChange={this.handleChange("username")} />
        <input type="password"
               placeholder="Password"
               onChange={this.handleChange("password")} />
        <button>Sign up</button>
        <button onClick={this.handleGuestLogin}>Guest log in</button>
      </form>
    );
  }
}
