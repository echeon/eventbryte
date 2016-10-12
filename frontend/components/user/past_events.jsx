import React from 'react';

export default class PastEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestEvents();
  }

  render() {
    return (
      <div>I'M past events.</div>
    );
  }
}
