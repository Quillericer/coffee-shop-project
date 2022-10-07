import { useNavigate } from "react-router-dom";

import Header from "../header/header";
import Footer from "../footer/footer";
import Divider from "../divider/divider";

import product from "../../assets/img/aromistico-about.jpg";

import "./coffee-item-about.scss";

const CoffeeItemAbout = (props) => {
  const { region, price } = props.data;
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <section className="coffee">
        <div className="container">
          <div className="go-back" onClick={() => navigate(-1)}>
            Go back
          </div>
          <div className="coffee__info">
            <img src={product} alt="coffee-product" />
            <div className="coffee__info-text">
              <div className="coffee__info-label">About it</div>
              <Divider />
              <div className="coffee__info-region">
                <span>Country:</span> {region}
              </div>
              <div className="coffee__info-descr">
                <span>Description:</span> Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Temporibus incidunt, dolore
                ipsum nulla quaerat aliquid debitis nobis libero molestiae
                corporis reiciendis cupiditate quia cumque fugiat eum. Modi
                quasi doloribus culpa.
              </div>
              <div className="coffee__info-price">
                <span>Price:</span> {price}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default CoffeeItemAbout;
