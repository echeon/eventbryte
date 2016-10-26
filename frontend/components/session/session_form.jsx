import React from 'react';
import Modal from 'react-modal';
import { Link, hashHistory } from 'react-router';
import LoginForm from '../forms/login_form';
import SignupForm from '../forms/signup_form';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  componentDidUpdate() {
    if (this.props.loggedIn) {
      hashHistory.push("/");
    }
  }

  render() {
    const { formType, login, errors, signup } = this.props;

    let form;
    if (formType === 'login') {
      form = <LoginForm login={login} errors={errors} />;
    } else if (formType === 'signup') {
      form = <SignupForm login={login} signup={signup} errors={errors}/>;
    }

    return (
      <div className="user-info-form-container">
        {form}
      </div>
    );
  }
}
