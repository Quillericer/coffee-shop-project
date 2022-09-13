import './header.scss';
import coffeeBeans from './icons/coffee-beans.svg'

const Header = () => {
    return (
        <div className="header__wrapper">
            <div className="header-item">
                <img src={coffeeBeans} alt="coffee-beans"/>
                <a className="header-item__label" href="#">Coffee house</a>
            </div>
            <div className="header-item">
                <a className="header-item__label" href="#">Our coffee</a>
            </div>
            <div className="header-item">
                <a className="header-item__label" href="#">For your pleasure</a>
            </div>
        </div>
    )
}

export default Header;