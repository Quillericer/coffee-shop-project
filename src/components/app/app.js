import {Component} from "react";

import CoffeeHouse from "../coffee-house/coffee-house";
import OurCoffee from "../our-coffee/our-coffee";
import Pleasure from "../pleasure/pleasure";

import './app.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: '',
            filter: '',
            data: [
                {name: 'AROMISTICO Coffee 1 kg', region: 'Brazil', price: '6.99$', img: '', id: 1},
                {name: 'AROMISTICO Coffee 1 kg', region: 'Kenya', price: '6.99$', img: '', id: 2},
                {name: 'AROMISTICO Coffee 1 kg', region: 'Kenya', price: '6.99$', img: '', id: 3},
                {name: 'AROMISTICO Coffee 1 kg', region: 'Brazil', price: '6.99$', img: '', id: 4},
                {name: 'AROMISTICO Coffee 1 kg', region: 'Columbia', price: '6.99$', img: '', id: 5},
                {name: 'AROMISTICO Coffee 1 kg', region: 'Brazil', price: '6.99$', img: '', id: 6}
            ]
        }
    }

    changeRegion = (items, filter) => {
        switch(filter) {
            case('Brazil'):
                return items.filter(item => item.region === 'Brazil');
            case('Kenya'):
                return items.filter(item => item.region === 'Kenya');
            case('Columbia'):
                return items.filter(item => item.region === 'Columbia');
            default:
                return items;
        }
    }

    onFilter = (filter) => {
        this.setState({filter}); // краткая запись filter: filter
    }

    changePage = (page) => {
        this.setState({page, filter: ''}) // краткая запись page: page
    }

    

    render() {
        const {data, filter, page} = this.state;
        const visibleData = this.changeRegion(data, filter);
        switch(page) {
            case('main'):
                return <CoffeeHouse changePage={this.changePage}/>;
            case('our'):
                return <OurCoffee changeRegion={this.changeRegion} onFilter={this.onFilter} changePage={this.changePage} data={visibleData}/>;
            case('pleasure'):
                return <Pleasure changeRegion={this.changeRegion} onFilter={this.onFilter} changePage={this.changePage} data={visibleData}/>;
            default:
                return <CoffeeHouse changePage={this.changePage}/>;
        }
    }
}

export default App;