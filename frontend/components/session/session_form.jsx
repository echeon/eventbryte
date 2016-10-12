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



// render() {
//   let header, otherHeader, link, errors;
//
//   if (this.props.formType === 'login') {
//     header = "Log in";
//     otherHeader = "login";
//     link = <Link to="/signup">Sign Up</Link>;
//   } else {
//     header = "Sign up";
//     otherHeader = "signup";
//     link = <Link to="/login">Log In</Link>;
//   }
//
//   if (this.props.errors.length) {
//     errors = (
//       <ul>
//         { this.props.errors.map( (error, i) => <li key={i}>{error}</li> ) }
//       </ul>
//     );
//   }
//
//   return (
//     <div>
//
//       <h1>{header}</h1>
//       <span>Please {otherHeader} or {link} instead</span>
//       {errors}
//       <form onSubmit={this.handleSubmit}>
//         Email <input type="text" onChange={this.handleChange("email")}/><br/>
//         Password <input type="password" onChange={this.handleChange("password")}/><br/>
//         <button>Submit</button>
//         <button onClick={this.handleGuestLogin}>Guest Login</button>
//       </form>
//     </div>
//   );
// }
