import { Component} from "react";

import Divider from '../divider/divider';

import product from '../../assets/img/aromistico-about.jpg';

import './coffee-item-about.scss';

class CoffeeItemAbout extends Component {
    render() {
        return(
            <section className="coffee">
                <div className="container">
                    <div className="coffee__info">
                        <img src={product} alt="coffee-product" />
                        <div className="coffee__info-text">
                            <div className="coffee__info-label">About it</div>
                            <Divider/>
                            <div className="coffee__info-region"><span>Country:</span> Brasil</div>
                            <div className="coffee__info-descr"><span>Description:</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus incidunt, dolore ipsum nulla quaerat aliquid debitis nobis libero molestiae corporis reiciendis cupiditate quia cumque fugiat eum. Modi quasi doloribus culpa.</div>
                            <div className="coffee__info-price"><span>Price:</span> 16.99$</div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default CoffeeItemAbout;