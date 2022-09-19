import { Component } from 'react';

import Header from '../header/header';
import Footer from '../footer/footer';
import Divider from '../divider/divider';
import CoffeeFilter from '../coffee-filter/coffee-filter';

import logo from '../coffee-house/icons/coffee-beans-logo.svg';
import coffeeCup from '../pleasure/img/coffee-cup.jpg';

import './pleasure.scss';

class Pleasure extends Component {
    render() {
        return (
            <>
                <section className="pleasure__promo">
                    <Header src={logo} changePage={this.props.changePage}/>
                    <div className="pleasure__promo-label">For your pleasure</div>
                </section>
                <section className="pleasure__about">
                    <div className="container">
                        <div className="pleasure__about-info">
                            <img src={coffeeCup} alt="" className="pleasure__about-img" />
                            <div className="pleasure__about-text">
                                <div className="pleasure__about-label">About our goods</div>
                                <Divider/>
                                <div className="pleasure__about-descr">
                                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                    <br /> <br />
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
                <CoffeeFilter data={this.props.data} filterPanel={this.props.filterPanel} onFilter={this.props.onFilter} changeRegion={this.props.changeRegion}/>
                <Footer changePage={this.props.changePage}/>
            </>
        )
    }
}

export default Pleasure;