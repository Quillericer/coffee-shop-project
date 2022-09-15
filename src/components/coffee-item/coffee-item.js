import { Component } from 'react';

import './coffee-item.scss';

class CoffeeItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {name, region, price, img} = this.props;
        return (
            <div className="filter__item">
                <img src={img} alt="coffee-product" className="filter__item-img" />
                <div className="filter__item-text">
                    <div className="filter__item-name">{name}</div>
                    <div className="filter__item-region">{region}</div>
                    <div className="filter__item-price">{price}</div>
                </div>
            </div>
        )
    }
}

export default CoffeeItem;
