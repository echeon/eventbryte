import React from 'react';
import EventsListContainer from './events_list_container';

export default class BrowseEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  // To be added when adding filters
  // componentWillMount() {
  //   this.props.updateFilter('user_id', this.props.currentUser.id);
  // }

  componentDidMount() {
    this.props.requestTypes();
    this.props.requestCategories();
  }

  render() {
    const { types, categories } = this.props;
    return (
      <div className="browse-events-container">
        <aside className="browse-events-filter">

        </aside>
        <div className="browse-events-list-container">
          <EventsListContainer types={types} cagetories={categories}/>
        </div>
      </div>
    );
  }
}
