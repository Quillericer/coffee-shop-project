import Header from '../header/header';
import Divider from '../divider/divider';

import logoBlack from '../../assets/icons/coffee-beans-logo-black.svg';

import './footer.scss';

const Footer = (props) => {
        return (
            <>
                <div className="container">
                    <Header src={logoBlack} footer changePage={props.changePage}/>
                    <Divider />
                </div>
            </>
            
        )
}

export default Footer;