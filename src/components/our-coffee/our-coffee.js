import { Component } from 'react';

import SectionHeader from '../section-header/section-header';
import AboutSection from '../about-section/about-section';
import CoffeeFilter from '../coffee-filter/coffee-filter';
import Header from '../header/header';
import Footer from '../footer/footer';

import headerImg from '../../assets/img/our-coffee-promo.jpg';
import aboutImg from '../../assets/img/about-img.jpg';

import './our-coffee.scss';

class OurCoffee extends Component {
    render() {
        const descr = 'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.'
        return (
            <>
                <Header/>
                <SectionHeader img={headerImg} label='Our Coffee' changePage={this.props.changePage}/>
                <AboutSection img={aboutImg} label='About out goods' descr={descr}/>
                <CoffeeFilter filterPanel={this.props.filterPanel} data={this.props.data} changeRegion={this.props.changeRegion} onFilter={this.props.onFilter} filter={this.props.filter}/>
                <Footer/>
            </>
        )
    }
        
}

export default OurCoffee;