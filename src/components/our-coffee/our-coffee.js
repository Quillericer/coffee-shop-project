import { Component } from 'react';

import SectionHeader from '../section-header/section-header';
import AboutSection from '../about-section/about-section';
import Footer from '../footer/footer';
import CoffeeFilter from '../coffee-filter/coffee-filter';

import headerImg from '../../assets/img/our-coffee-promo.jpg';
import aboutImg from '../../assets/img/about-img.jpg';

import './our-coffee.scss';

class OurCoffee extends Component {
    render() {
        const firstPart = 'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.',
            secondPart = 'Afraid at highly months do things on at. Situation recommend objection do intention so questions.',
            thirdPart = 'As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.';
        return (
            <>
                <SectionHeader img={headerImg} label='Our Coffee' changePage={this.props.changePage}/>
                <AboutSection img={aboutImg} label='About out goods' descr={[firstPart, <br/>, <br/>, secondPart, <br/>, thirdPart]}/>
                <CoffeeFilter filterPanel={this.props.filterPanel} data={this.props.data} changeRegion={this.props.changeRegion} onFilter={this.props.onFilter}/>
                <Footer changePage={this.props.changePage}/>
            </>
        )
    }
}

export default OurCoffee;