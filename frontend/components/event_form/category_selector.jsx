import React from 'react';

export default class CategorySelector extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { categories, subcategories } = this.props;
    const { categoryId, subcategoryId } = this.props;

    const categoryList = Object.keys(categories).map(key => {
      const category = categories[key];
      return (
        <option key={key} value={category.id}>
          {category.name}
        </option>
      );
    });

    const subcategoryList = subcategories.map(subcategory => {
      return (
        <option key={subcategory.id} value={subcategory.id}>
          {subcategory.name}
        </option>
      );
    });

    let hideSubcategory = "";
    if (categoryId === "0" || categoryId === "14") {
      hideSubcategory = 'hiddenSelector';
    }

    return (
      <div className="event-detail-container">
        <h3>event topic</h3>
        <div className="flex">
          <div className="category-selector-container">
              <select id="event-form-category"
                      value={categoryId}
                      onChange={this.props.onCategoryChange}>
                <option value="0">Select a topic</option>
                {categoryList}
              </select>
              <span className="event-form-error"></span>
          </div>
          <div className="subcategory-selector-container">
            <div className={`${hideSubcategory}`}>
              <select id="event-form-subcategory"
                      value={subcategoryId}
                      onChange={this.props.onSubcategoryChange}>
                <option value="0">Select a sub-topic</option>
                {subcategoryList}
              </select>
              <span className="event-form-error"></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
