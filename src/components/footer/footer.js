import { Component } from 'react';

import Header from '../header/header';
import Divider from '../divider/divider';

import logoBlack from '../../assets/icons/coffee-beans-logo-black.svg';

import './footer.scss';

class Footer extends Component {
    render() {
        return (
            <div className="container">
                <Header src={logoBlack} footer changePage={this.props.changePage}/>
                <Divider />
            </div>
        )
    }
}

export default Footer;