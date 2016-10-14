import React from 'react';
import Select from 'react-select';

// var options = [
//     { value: 'one', label: 'One' },
//     { value: 'two', label: 'Two' }
// ];
//
// function logChange(val) {
//     console.log("Selected: " + val);
// }
//
// <Select
//     name="form-field-name"
//     value="one"
//     options={options}
//     onChange={logChange}
// />

export default class FilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typeId: 0,
      categoryId: 0,
      subcategoryId: 0
    };

    this.filterByType = this.filterByType.bind(this);
    this.filterByCategory = this.filterByCategory.bind(this);
    this.filterBySubcategory = this.filterBySubcategory.bind(this);
  }

  filterByType(option) {
    this.setState({ typeId: option.value });
  }

  filterByCategory(option) {
    this.setState({ categoryId: option.value, subcategoryId: 0 });
  }

  filterBySubcategory(option) {
    this.setState({ subcategoryId: option.value });
  }

  render() {
    const { categories, types } = this.props;

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
    if (this.state.categoryId && categories[this.state.categoryId]) {
      subcategories = categories[this.state.categoryId].subcategories;
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

    return (
      <div>
        <h2>Show Results For</h2>
        <h3>Event Type</h3>
        <Select
          searchable={false}
          clearable={false}
          className="type-select"
          options={typeOptions}
          value={this.state.typeId}
          onChange={this.filterByType} />

        <h3>Category</h3>
        <Select
          searchable={false}
          clearable={false}
          className="category-select"
          options={categoryOptions}
          value={this.state.categoryId}
          onChange={this.filterByCategory} />

        <h3>Subcategory</h3>
        <Select
          searchable={false}
          clearable={false}
          className="subcategory-select"
          options={subcategoryOptions}
          value={this.state.subcategoryId}
          onChange={this.filterBySubcategory} />
      </div>
    );
  }
}
