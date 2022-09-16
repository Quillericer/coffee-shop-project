import CoffeeItem from "../coffee-item/coffee-item";

import product from '../our-coffee/img/product.png';

import './coffee-filter.scss';

const CoffeeFilter = () => {
    return (
        <>
            <div className="container">
                    <hr className="filter-divider"/>
                    <div className="filter">
                        <div className="filter__search">
                            <div className="filter__search-text">Looking for</div>
                            <input type="text" className="filter__search-input" placeholder="start typing here..."/>
                        </div>
                        <div className="filter__click">
                            <div className="filter__click-text">Or filter</div>
                            <button className="filter__click-button">Brazil</button>
                            <button className="filter__click-button">Kenya</button>
                            <button className="filter__click-button">Columbia</button>
                        </div>
                    </div>
                    <div className="filter__items">
                        <CoffeeItem name="AROMISTICO Coffee 1 kg" region="Brazil" price="6.99$" img={product}/>
                        <CoffeeItem name="AROMISTICO Coffee 1 kg" region="Brazil" price="6.99$" img={product}/>
                        <CoffeeItem name="AROMISTICO Coffee 1 kg" region="Brazil" price="6.99$" img={product}/>
                        <CoffeeItem name="AROMISTICO Coffee 1 kg" region="Brazil" price="6.99$" img={product}/>
                        <CoffeeItem name="AROMISTICO Coffee 1 kg" region="Brazil" price="6.99$" img={product}/>
                        <CoffeeItem name="AROMISTICO Coffee 1 kg" region="Brazil" price="6.99$" img={product}/>
                    </div>
                </div>
        </>
    )
}

export default CoffeeFilter;