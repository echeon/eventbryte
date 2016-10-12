import React from 'react';

export default class UpcomingEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestEvents();
  }

  render() {
    return (
      <div>I'M future events.</div>
    );
  }
}
