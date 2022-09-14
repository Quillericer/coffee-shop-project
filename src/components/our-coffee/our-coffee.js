import Header from '../header/header';
import Footer from '../footer/footer';
import Divider from '../divider/divider';

import logo from '../coffee-house/icons/coffee-beans-logo.svg';
import aboutImg from './img/about-img.jpg';
import './our-coffee.scss';

const OurCoffee = () => {
    return (
        <>
            <section className="our__promo">
                <Header src={logo}/>
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
            <section className="our__filter">
                <div className="container">
                    <hr className="our__filter-divider"/>
                    <div className="filter">
                        <div className="filter__search">
                            <div className="filter__search-text">Looking for</div>
                            <input type="text" className="filter__search-input" placeholder="start typing here..."/>
                        </div>
                        <div className="filter__click">
                            <div className="filter__click-text">Or filter</div>
                            <button className="filter__click-button">Brazil</button>
                            <button className="filter__click-button">Kenya</button>
                            <button className="filter__click-button">Columbia</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurCoffee;