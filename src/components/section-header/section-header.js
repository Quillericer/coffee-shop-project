import Header from "../header/header";

import logo from "../../assets/icons/coffee-beans-logo.svg";

import "./section-header.scss";

const SectionHeader = (props) => {
  const { img, label } = props;
  return (
    <section
      className="section__promo"
      style={{ background: `url(${img}) center/cover no-repeat` }}
    >
      <Header src={logo} changePage={props.changePage} />
      <div className="section__promo-label">{label}</div>
    </section>
  );
};

export default SectionHeader;
