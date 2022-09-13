import Header from '../header/header';
import Divider from '../divider/divider';

import logoBlack from '../coffee-house/icons/coffee-beans-logo-black.svg';

import './footer.scss';

const Footer = () => {
    return (
        <div className="container">
            <Header src={logoBlack} footer/>
            <Divider />
        </div>
    )
}

export default Footer;