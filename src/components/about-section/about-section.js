import { Component } from "react";

import Divider from "../divider/divider";

import './about-section.scss';

class AboutSection extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {img, label, descr} = this.props;
        return(
            <section className='our__about'>
                <div className="container">
                    <div className="our__info">
                        <img src={img} alt="girl-coffee" />
                        <div className="our__info-text">
                            <div className="our__info-label">{label}</div>
                            <Divider/>
                            <div className="our__info-descr">
                                {descr}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        )
    }
}

export default AboutSection;