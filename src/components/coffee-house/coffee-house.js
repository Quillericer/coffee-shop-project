import { Component } from "react";

import Header from "../header/header";
import Footer from "../footer/footer";
import Divider from "../divider/divider";

import logo from './icons/coffee-beans-logo.svg';
import firstImage from './img/best-products/first.png';
import secondImage from './img/best-products/second.png';
import thirdImage from './img/best-products/third.png';

import './coffee-house.scss';

class CoffeeHouse extends Component {
  constructor(props) {
    super(props);
  }
    render() {
      return (
        <>
            <section className="promo">
            <Header src={logo} changePage={this.props.changePage}/>
            <div className="container">
              <h1 className="promo__header">Everything You Love About Coffee</h1>
              <Divider white/>
              <div className="promo__descr">
                We make every day full of energy and taste
                <br />
                Want to try our beans?
              </div>
              <a className="promo__btn" href="#best">More</a>
            </div>
          </section>
          <section className="about">
            <div className="container">
              <div className="about__label">About Us</div>
              <Divider />
              <div className="about__descr">
                  Extremity sweetness difficult behaviour he of. On disposal of as
                  landlord horrible. <br />
                  Afraid at highly months do things on at. Situation recommend
                  objection do intention so questions. As greatly removed calling
                  pleased improve an. Last ask him cold feel met spot shy want.
                  Children me laughing we prospect answered followed. At it went is
                  song that held help face.
                  <br /> <br />
                  Now residence dashwoods she excellent you. Shade being under his
                  bed her, Much read on as draw. Blessing for ignorant exercise any
                  yourself unpacked. Pleasant horrible but confined day end
                  marriage. Eagerness furniture set preserved far recommend. Did
                  even but nor are most gave hope. Secure active living depend son
                  repair day ladies now.
              </div>
            </div>
          </section>
          <section className="best" id="best">
              <div className="container">
                  <div className="best__label">Our best</div>
                  <div className="best__wrapper">
                      <div className="best__products">
                          <div className="best__product">
                              <img src={firstImage} alt="first" className="best__product-image" />
                              <div className="best__product-name">Solimo Coffee Beans 2 kg</div>
                              <div className="best__product-price">10.73$</div>
                          </div>
                          <div className="best__product">
                              <img src={secondImage} alt="second" className="best__product-image" />
                              <div className="best__product-name">Presto Coffee Beans 1 kg</div>
                              <div className="best__product-price">15.99$</div>
                          </div>
                          <div className="best__product">
                              <img src={thirdImage} alt="third" className="best__product-image" />
                              <div className="best__product-name">AROMISTICO Coffee 1 kg</div>
                              <div className="best__product-price">6.99$</div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <Footer changePage={this.props.changePage}/>
        </>
      );
    }
}

export default CoffeeHouse;