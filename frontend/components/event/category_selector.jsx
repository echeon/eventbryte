import React from 'react';

export default class CategorySelector extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { categories } = this.props;

    const categoryList = Object.keys(categories).map(key => {
      const category = categories[key];
      return <option key={key} value={category.id}>{category.name}</option>;
    });

    return (
      <div className="event-detail-container">
        <h3>event topic</h3>
        <div className="category-selector-container">
          <select>
            <option value="" disabled selected>Select a topic</option>
            {categoryList}
          </select>
        </div>
      </div>
    );
  }
}
