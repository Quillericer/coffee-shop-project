import {Component} from 'react';

import AppFilter from '../app-filter/app-filter';
import SearchPanel from '../search-panel/search-panel';
import CoffeeItem from "../coffee-item/coffee-item";

import product from '../our-coffee/img/product.png';

import './coffee-filter.scss';

class CoffeeFilter extends Component {
    render() {
        const elements = this.props.data.map(item => {
            const {id, img, ...itemProps} = item;
            return (
                <CoffeeItem
                key={id}
                img={product}
                {...itemProps}
                />
            )
        })
        return (
            <>
                <div className="container">
                        <hr className="filter-divider"/>
                        <div className="filter">
                            <SearchPanel/>
                            <AppFilter onFilter={this.props.onFilter}/>
                        </div>
                        <div className="filter__items">
                            {elements}
                        </div>
                    </div>
            </>
        )
    }
}

export default CoffeeFilter;