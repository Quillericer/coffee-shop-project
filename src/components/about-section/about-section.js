import Divider from "../divider/divider";

import "./about-section.scss";

const AboutSection = (props) => {
  const { img, label, descr } = props;
  return (
    <section className="our__about">
      <div className="container">
        <div className="our__info">
          <img src={img} alt="girl-coffee" />
          <div className="our__info-text">
            <div className="our__info-label">{label}</div>
            <Divider />
            <div className="our__info-descr">{descr}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
