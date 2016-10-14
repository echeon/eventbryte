import React from 'react';
import Select from 'react-select';

export default class FilterForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    const { updateFilter } = this.props;
    updateFilter('typeId', 0);
    updateFilter('categoryId', 0);
    updateFilter('subcategoryId', 0);
  }

  handleChange(filter, updateFilter) {
    return e => {
      updateFilter(filter, e.value);
      if (filter === 'categoryId') {
        updateFilter('subcategoryId', 0);
      }
    };
  }

  render() {
    const { categories, types, typeId, categoryId, subcategoryId } = this.props;

    let typeOptions = Object.keys(types).map(key => ({
      value: types[key].id,
      label: types[key].name
    }));

    let categoryOptions = Object.keys(categories).map(key => ({
      value: categories[key].id,
      label: categories[key].name
    }));

    let subcategories;
    let subcategoryOptions = [];
    if (categoryId && categories[categoryId]) {
      subcategories = categories[categoryId].subcategories;
      subcategories.forEach(subcategory => {
        subcategoryOptions.push({
          value: subcategory.id,
          label: subcategory.name
        });
      });
    }

    const allTypesOption = [{ value: 0, label: "All Types" }];
    const allCategoriesOption = [{ value: 0, label: "All Categories"}];
    const allSubcategoriesOption = [{ value: 0, label: "All Subcategories"}];

    typeOptions = allTypesOption.concat(typeOptions);
    categoryOptions = allCategoriesOption.concat(categoryOptions);
    subcategoryOptions = allSubcategoriesOption.concat(subcategoryOptions);

    const { updateFilter } = this.props;

    return (
      <div>
        <h2>Show Results For</h2>
        <h3>Event Type</h3>
        <Select
          searchable={false}
          clearable={false}
          className="type-select"
          options={typeOptions}
          value={typeId}
          onChange={this.handleChange('typeId', updateFilter)} />

        <h3>Category</h3>
        <Select
          searchable={false}
          clearable={false}
          className="category-select"
          options={categoryOptions}
          value={categoryId}
          onChange={this.handleChange('categoryId', updateFilter)} />

        <h3>Subcategory</h3>
        <Select
          searchable={false}
          clearable={false}
          className="subcategory-select"
          options={subcategoryOptions}
          value={subcategoryId}
          onChange={this.handleChange('subcategoryId', updateFilter)} />
      </div>
    );
  }
}
