import Divider from "../divider/divider";
import CoffeeBest from "../coffee-best/coffee-best";
import { Link } from "react-router-dom";
import Header from '../header/header';
import Footer from '../footer/footer';


import "./coffee-house.scss";

const CoffeeHouse = (props) => {
  return (
    <>
      <Header/>
      <section className="promo">
        <div className="container">
          <h1 className="promo__header">Everything You Love About Coffee</h1>
          <Divider white />
          <div className="promo__descr">
            We make every day full of energy and taste
            <br />
            Want to try our beans?
          </div>
          <Link className="promo__btn" to="/coffee-shop-project/our-coffee">
            More
          </Link>
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
            Now residence dashwoods she excellent you. Shade being under his bed
            her, Much read on as draw. Blessing for ignorant exercise any
            yourself unpacked. Pleasant horrible but confined day end marriage.
            Eagerness furniture set preserved far recommend. Did even but nor
            are most gave hope. Secure active living depend son repair day
            ladies now.
          </div>
        </div>
      </section>
      <section className="best" id="best">
        <div className="container">
          <div className="best__label">Our best</div>
          <CoffeeBest bestData={props.bestData} />
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default CoffeeHouse;
