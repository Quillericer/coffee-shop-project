import AppFilter from '../app-filter/app-filter';
import SearchPanel from '../search-panel/search-panel';
import CoffeeItem from "../coffee-item/coffee-item";


import './coffee-filter.scss';

const CoffeeFilter = (props) => {

    const elements = props.data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <CoffeeItem
            key={id}
            {...itemProps}
            />
        )
    })
    return (
        <>
            <div className="container">
                    <hr className="filter-divider"/>
                    <div className="filter">
                        <SearchPanel filterPanel={props.filterPanel}/>
                        <AppFilter onFilter={props.onFilter} filter={props.filter}/>
                    </div>
                    <div className="filter__items">
                        {elements}
                    </div>
                </div>
        </>
    )
}

export default CoffeeFilter;