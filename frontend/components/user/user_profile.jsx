import React from 'react';
import { Link } from 'react-router';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestEvents();
  }

  render() {
    const { savedEvents } = this.props;

    const selected = pathname => (
      (this.props.location.pathname.endsWith(pathname)) ? "selected" : ""
    );

    return (
      <div>
        <div className="myprofile-header-list">
          <Link to="/myprofile"
                className={`myprofile-header-tab ${selected("myprofile")}`}>
            <div className="myprofile-header-count">
              0
            </div>
            <div>
              upcoming events
            </div>
          </Link>
          <Link to="/myprofile/saved"
                className={`myprofile-header-tab ${selected("saved")}`}>
            <div className="myprofile-header-count">
              {Object.keys(savedEvents).length}
            </div>
            <div>
              saved events
            </div>
          </Link>
          <Link to="/myprofile/past"
                className={`myprofile-header-tab ${selected("past")}`}>
            <div className="myprofile-header-count">
              0
            </div>
            <div>
              past events
            </div>
          </Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}
