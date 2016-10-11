import React from 'react';

export default class BrowseEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestEvents();
  }

  componentWillMount() {
  }

  // To be added when adding filters
  // componentWillMount() {
  //   this.props.updateFilter('user_id', this.props.currentUser.id);
  // }

  render() {
    return (
      <div>
        <h1>Total number of events</h1>
        <p>{Object.keys(this.props.events).length}</p>
      </div>
    );
  }
}
