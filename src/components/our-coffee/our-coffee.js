import { Component } from 'react';

import Header from '../header/header';
import Footer from '../footer/footer';
import Divider from '../divider/divider';
import CoffeeFilter from '../coffee-filter/coffee-filter';

import logo from '../coffee-house/icons/coffee-beans-logo.svg';
import aboutImg from './img/about-img.jpg';
import './our-coffee.scss';

class OurCoffee extends Component {
    render() {
        return (
            <>
                <section className="our__promo">
                    <Header src={logo} changePage={this.props.changePage}/>
                    <div className="our__promo-label">Our Coffee</div>
                </section>
                <section className="our__about">
                    <div className="container">
                        <div className="our__info">
                            <img src={aboutImg} alt="girl-coffee" />
                            <div className="our__info-text">
                                <div className="our__info-label">About our beans</div>
                                <Divider/>
                                <div className="our__info-descr">
                                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                <br /><br />
                                Afraid at highly months do things on at. Situation recommend objection do intention
                                so questions.
                                <br />
                                As greatly removed calling pleased improve an. Last ask him cold feel
                                met spot shy want. Children me laughing we prospect answered followed. At it went
                                is song that held help face.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <CoffeeFilter filterPanel={this.props.filterPanel} data={this.props.data} changeRegion={this.props.changeRegion} onFilter={this.props.onFilter}/>
                <Footer changePage={this.props.changePage}/>
            </>
        )
    }
}

export default OurCoffee;