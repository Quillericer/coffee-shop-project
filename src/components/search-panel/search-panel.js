import { Component } from 'react';

import './search-panel.scss';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.filterPanel(term);
    }

    render() {
        return (
            <div className="filter__search">
                <div className="filter__search-text">Looking for</div>
                <input type="text" className='filter__search-input' placeholder='start typing here...' onChange={this.onUpdateSearch}/>
            </div>
        )
    }
}

export default SearchPanel;