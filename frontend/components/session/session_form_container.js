import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = state => {
  return {
    loggedIn: !!state.session.currentUser,
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const pathname = ownProps.location.pathname;
  if (pathname === '/login') {
    return {
      formType: 'login',
      processForm: user => dispatch(login(user))
    };
  } else if (pathname === '/signup') {
    return {
      formType: 'signup',
      processForm: user => dispatch(signup(user))
    };
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
