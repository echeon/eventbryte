import React from 'react';
import Modal from 'react-modal';
import ModalStyle from './modal_style';
import LoginForm from '../forms/login_form';
import SignupForm from '../forms/signup_form';
import { Link, hashHistory, router } from 'react-router';

export default class HeaderList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      login: false
    };

    this._handleClick = this._handleClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  _handleClick(bool) {
    this.setState({
      isModalOpen: true,
      login: bool
    });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
    ModalStyle.content.transform = 'translateX(-50%) translateY(0)';
  }

  onModalOpen() {
    ModalStyle.content.transform = 'translateX(-50%) translateY(30%)';
  }

  render() {
    let form;
    let { login, signup, errors } = this.props;

    if (this.state.login) {
      form = <LoginForm login={login} errors={errors} />;
    } else {
      form = <SignupForm login={login} signup={signup} errors={errors}/>;
    }

    if (typeof this.props.currentUser === 'undefined') {
      return (
        <div>
          <ul className="header-list">
            <li>
              <button onClick={this._handleClick.bind(this, false)}>
                sign up</button>
            </li>
            <li>
              <button onClick={this._handleClick.bind(this, true)}>
                log in</button>
            </li>
          </ul>

          <Modal isOpen={this.state.isModalOpen}
                 onRequestClose={this.closeModal}
                 onAfterOpen={this.onModalOpen}
                 style={ModalStyle}>
            <button className="modal-close" onClick={this.closeModal}>X</button>
            {form}
          </Modal>
        </div>
      );
    } else {
      return (
        <ul className="header-list">
          <li>
            <Link to="/browse">
              <button className="header-browse-event">browse events</button>
            </Link>
          </li>
          <li>
            <Link to="/events/create">
              <button className="header-create-event">create event</button>
            </Link>
          </li>
          <li>
            <button>
              <i className="material-icons">account_circle</i>
              <i className="material-icons">expand_more</i>
            </button>
            <ul className="menu-logged-in">
              <li><Link to="/myprofile">Tickets</Link></li>
              <li><Link to="/myprofile/saved">Saved</Link></li>
              <hr/>
              <li><Link to="/events/manage">Manage Events</Link></li>
              <hr/>
              <li><a onClick={this.props.logout}>Log Out</a></li>
            </ul>
          </li>
        </ul>
      );
    }
  }
}
