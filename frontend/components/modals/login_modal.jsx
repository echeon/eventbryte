var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');

class LoginModal extends React.Component {
  constructor() {
    super();
    this.state = { modalIsOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  afterOpenModal() {
    this.refs.subtitle.style.color = '#f00';
  }

  componentWillMount() {
    Modal.setAppElement('#root');
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className="modal-login"
          overlayClassName="modal-login-overlay">

          <h2>Log in</h2>
          <button onClick={this.closeModal}>close</button>

          <form className='user-info-form'>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Log in</button>
            <button>Guest log in</button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
