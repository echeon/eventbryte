import React from 'react';
import EventsListContainer from './events_list_container';
import FilterForm from './filter_form';

export default class BrowseEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestEvents();
    this.props.requestTypes();
    this.props.requestCategories();
  }

  render() {
    const { types, categories, events, updateFilter, requestEvents } = this.props;
    const { typeId, categoryId, subcategoryId } = this.props;

    return (
      <div className="browse-events-container">
        <aside className="browse-events-filter">
          <FilterForm types={types}
                      categories={categories}
                      typeId={typeId}
                      categoryId={categoryId}
                      subcategoryId={subcategoryId}
                      updateFilter={updateFilter}/>
        </aside>
        <div className="browse-events-list-container">
          <EventsListContainer events={events}
                               types={types}
                               categories={categories}/>
        </div>
      </div>
    );
  }
}
