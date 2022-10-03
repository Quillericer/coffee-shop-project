import coffeeBeansBlack from "../../assets/icons/coffee-beans-black.svg";
import coffeeBeansWhite from "../../assets/icons/coffee-beans.svg";

import "./divider.scss";

const Divider = (props) => {
  const dividerWhite = props.white ? "divider" : "divider black";
  const beansWhite = props.white ? coffeeBeansWhite : coffeeBeansBlack;
  return (
    <div className="image">
      <hr className={dividerWhite}></hr>
      <img src={beansWhite} alt="coffee-beans-black" />
      <hr className={dividerWhite}></hr>
    </div>
  );
};

export default Divider;
