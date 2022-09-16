import {Component} from "react";

import CoffeeHouse from "../coffee-house/coffee-house";
import OurCoffee from "../our-coffee/our-coffee";
import Pleasure from "../pleasure/pleasure";

import './app.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: ''
        }
    }

    changePage = (page) => {
        this.setState({page}) // краткая запись page: page
    }

    render() {
        const {page} = this.state;
        switch(page) {
            case('main'):
                return <CoffeeHouse changePage={this.changePage}/>;
            case('our'):
                return <OurCoffee changePage={this.changePage}/>;
            case('pleasure'):
                return <Pleasure changePage={this.changePage}/>;
            default:
                return <CoffeeHouse changePage={this.changePage}/>;
        }
    }
}

export default App;