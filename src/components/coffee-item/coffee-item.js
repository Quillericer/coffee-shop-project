import { Link } from "react-router-dom";

import "./coffee-item.scss";

const CoffeeItem = (props) => {
  const { name, region, price, img, id } = props;
  return (
    <Link className="filter__item" to={`/coffee-item-about/${id}`}>
      <img src={img} alt="coffee-product" className="filter__item-img" />
      <div className="filter__item-text">
        <div className="filter__item-name">{name}</div>
        <div className="filter__item-region">{region}</div>
        <div className="filter__item-price">{price}</div>
      </div>
    </Link>
  );
};

export default CoffeeItem;
