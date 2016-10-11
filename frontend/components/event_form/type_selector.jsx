import React from 'react';

export default class TypeSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { types } = this.props;

    const typeList = Object.keys(types).map(key => {
      const type = types[key];
      return <option key={key} value={type.id}>{type.name}</option>;
    });

    return (
      <div className="event-detail-container">
        <h3>event type</h3>
        <div className="type-selector-container">
          <select value={this.props.value} onChange={this.props.onTypeChange}>
            <option value="0" disabled>Select the type of event</option>
            {typeList}
          </select>
        </div>
      </div>
    );
  }
}
