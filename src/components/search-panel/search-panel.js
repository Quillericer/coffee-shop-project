import { Component } from 'react';

import './search-panel.scss';

class SearchPanel extends Component {
    render() {
        return (
            <div className="filter__search">
                <div className="filter__search-text">Looking for</div>
                <input type="text" className='filter__search-input' placeholder='start typing here...'/>
            </div>
        )
    }
}

export default SearchPanel;