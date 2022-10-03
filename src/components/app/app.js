import {Component} from "react";

import CoffeeHouse from "../coffee-house/coffee-house";
import OurCoffee from "../our-coffee/our-coffee";
import Pleasure from "../pleasure/pleasure";

import aromistico from '../../assets/img/aromistico.png';
import solimo from '../../assets/img/solimo.png';
import presto from '../../assets/img/presto.png';



import './app.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: '',
            filter: '',
            term: '',
            data: [
                {name: 'AROMISTICO Coffee 1 kg', region: 'Brazil', price: '6.99$', img: aromistico, id: 1, active: false},
                {name: 'AROMISTICO Coffee 1 kg', region: 'Kenya', price: '6.99$', img: aromistico, id: 2, active: false},
                {name: 'AROMISTICO Coffee 1 kg', region: 'Columbia', price: '6.99$', img: aromistico, id: 3, active: false},
                {name: 'AROMISTICO Coffee 1 kg', region: 'Brazil', price: '6.99$', img: aromistico, id: 4, active: false},
                {name: 'AROMISTICO Coffee 1 kg', region: 'Brazil', price: '6.99$', img: aromistico, id: 5, active: false},
                {name: 'AROMISTICO Coffee 1 kg', region: 'Brazil', price: '6.99$', img: aromistico, id: 6, active: false}
            ],
            best: [
                {name: 'Solimo Coffee Beans 2 kg', price: '10.73$', img: solimo, id: 1},
                {name: 'Presto Coffee Beans 1 kg', price: '15.99$', img: presto, id: 2},
                {name: 'AROMISTICO Coffee 1 kg', price: '6.99$', img: aromistico, id: 3}
            ],
            active: ''
        }
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > - 1;
        })
    }

    filterPanel = (term) => {
        this.setState({term});
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
        const {data, filter, page, term, best} = this.state;
        const visibleData = this.changeRegion(this.searchEmp(data, term), filter);

        switch(page) {
            case('main'):
                return <CoffeeHouse bestData={best} changePage={this.changePage}/>;
            case('our'):
                return <OurCoffee changeRegion={this.changeRegion} filterPanel={this.filterPanel} onFilter={this.onFilter} changePage={this.changePage} data={visibleData} filter={filter}/>;
            case('pleasure'):
                return <Pleasure changeRegion={this.changeRegion} filterPanel={this.filterPanel} onFilter={this.onFilter} changePage={this.changePage} data={visibleData} filter={filter}/>;
            default:
                return <CoffeeHouse bestData={best} changePage={this.changePage}/>;
        }
    }
}

export default App;