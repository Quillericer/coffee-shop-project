import Header from "../header/header";

import coffeeBeans from './icons/coffee-beans.svg';

import './coffee-house.scss';

const CoffeeHouse = () => {
    return (  
        <div>
            <section className="promo">
                <Header/>
                <div className="container">
                    <h1 className="promo__header">
                        Everything You Love About Coffee
                    </h1>
                    <div className="promo__image">
                        <hr className="divider"></hr>
                        <img src={coffeeBeans} alt="coffee-beans" />
                        <hr className="divider"></hr>
                    </div>
                    <div className="promo__descr">
                        We make every day full of energy and taste
                        <br />
                        Want to try our beans?
                    </div>
                    <button className="promo__btn">
                        More
                    </button>
                </div>
            </section>
        </div>
    )
}

export default CoffeeHouse;