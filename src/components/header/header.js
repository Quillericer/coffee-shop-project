import { Component } from 'react';
import './header.scss';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {src} = this.props;
        const footer = this.props.footer ? 'header-item__label footer' : 'header-item__label';
        const center = this.props.footer ? 'header__wrapper center' : 'header__wrapper';

        return (
            <div className={center}>
                <div className="header-item">
                    <img src={src} alt="coffee-beans"/>
                    <button className={footer} onClick={() => this.props.changePage('main')}>Coffee house</button>
                </div>
                <div className="header-item">
                    <button className={footer} onClick={() => this.props.changePage('our')}>Our coffee</button>
                </div>
                <div className="header-item">
                    <button className={footer} onClick={() => this.props.changePage('pleasure')}>For your pleasure</button>
                </div>
            </div>  
        )
    }
}

export default Header;