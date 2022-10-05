import { Component } from "react";

import AppFilter from "../app-filter/app-filter";
import SearchPanel from "../search-panel/search-panel";
import CoffeeItem from "../coffee-item/coffee-item";

import "./coffee-filter.scss";

class CoffeeFilter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const elements = this.props.data.map((item) => {
      return (
        <CoffeeItem
          key={item.id}
          {...item}
        />
      );
    });
    return (
      <section className="filter">
        <div className="container">
          <hr className="filter__divider" />
          <div className="filter__components">
            <SearchPanel filterPanel={this.props.filterPanel} />
            <AppFilter onFilter={this.props.onFilter} filter={this.props.filter} />
          </div>
          <div className="filter__items">{elements}</div>
        </div>
      </section>
    );
  }
}

export default CoffeeFilter;
