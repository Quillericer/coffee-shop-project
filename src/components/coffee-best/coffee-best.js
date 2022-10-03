import "./coffee-best.scss";

const CoffeeBest = (props) => {
  const bestProducts = props.bestData.map((item) => {
    const { id, img, name, price } = item;
    return (
      <div className="best__product" key={id}>
        <img src={img} alt="best-product" className="best__product-image" />
        <div className="best__product-name">{name}</div>
        <div className="best__product-price">{price}</div>
      </div>
    );
  });
  return <div className="best__products">{bestProducts}</div>;
};

export default CoffeeBest;
