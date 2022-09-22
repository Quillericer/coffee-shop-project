import { Component } from 'react';

import SectionHeader from '../section-header/section-header';
import AboutSection from '../about-section/about-section';
import Footer from '../footer/footer';
import CoffeeFilter from '../coffee-filter/coffee-filter';

import headerImg from '../../assets/img/pleasure-promo.jpg';
import coffeeCup from '../../assets/img/coffee-cup.jpg';

import './pleasure.scss';

class Pleasure extends Component {
    render() {
        const firstPart = 'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.',
            secondPart = 'Afraid at highly months do things on at. Situation recommend objection do intention so questions.',
            thirdPart = 'As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.';
        return (
            <>
                <SectionHeader changePage={this.props.changePage} img={headerImg} label='For your pleasure'/>
                <AboutSection img={coffeeCup} label='About out goods' descr={[firstPart, <br/>, <br/>, secondPart, <br/>, thirdPart]}/>
                <CoffeeFilter data={this.props.data} filterPanel={this.props.filterPanel} onFilter={this.props.onFilter} changeRegion={this.props.changeRegion}/>
                <Footer changePage={this.props.changePage}/>
            </>
        )
    }
}

export default Pleasure;