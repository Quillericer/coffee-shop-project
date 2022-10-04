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
        <section className='filter'>
            <div className="container">
                    <hr className="filter__divider"/>
                    <div className="filter__components">
                        <SearchPanel filterPanel={props.filterPanel}/>
                        <AppFilter onFilter={props.onFilter} filter={props.filter}/>
                    </div>
                    <div className="filter__items">
                        {elements}
                    </div>
                </div>
        </section>
    )
}

export default CoffeeFilter;