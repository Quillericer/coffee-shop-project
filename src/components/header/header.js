import { Component } from 'react';
import './header.scss';

class Header extends Component {
    render() {
        const {src} = this.props;
        const footer = this.props.footer ? 'header-item__label footer' : 'header-item__label';
        const center = this.props.footer ? 'header__wrapper center' : 'header__wrapper';

        return (
            <div className={center}>
                <div className="header-item">
                    <img src={src} alt="coffee-beans"/>
                    <a className={footer} href="...">Coffee house</a>
                </div>
                <div className="header-item">
                    <a className={footer} href="...">Our coffee</a>
                </div>
                <div className="header-item">
                    <a className={footer} href="...">For your pleasure</a>
                </div>
            </div>  
        )
    }
}

export default Header;