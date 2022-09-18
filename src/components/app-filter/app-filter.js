import { Component } from 'react';

import './app-filter.scss';

class AppFilter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const buttonsData = [
            {name: 'Brazil', label: 'Brazil'},
            {name: 'Kenya', label: 'Kenya'},
            {name: 'Columbia', label: 'Columbia'}
        ];
    
        const buttons = buttonsData.map(({name, label}) => {
            return (
                <button
                className='filter__click-button'
                type='button'
                key={name}
                onClick={() => this.props.onFilter(name)}>
                    {label}
                </button>
            )
        })
    
        return (
            <div className='filter__click'>
                <div className="filter__click-text">Or filter</div>
                {buttons}
            </div>
        )
    }
    
}

export default AppFilter;