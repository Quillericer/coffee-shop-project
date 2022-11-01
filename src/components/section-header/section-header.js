import { memo } from "react";
import "./section-header.scss";

const SectionHeader = memo((props) => {
  const { img, label } = props;
  return (
    <section
      className="section__promo"
      style={{ background: `url(${img}) center/cover no-repeat` }}
    >
      <div className="section__promo-label">{label}</div>
    </section>
  );
})

export default SectionHeader;
