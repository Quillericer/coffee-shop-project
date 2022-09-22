import { Component } from 'react';

import coffeeBeansBlack from '../../assets/icons/coffee-beans-black.svg';
import coffeeBeansWhite from '../../assets/icons/coffee-beans.svg';

import './divider.scss';

class Divider extends Component {
    render() {
        const dividerWhite = this.props.white ? 'divider' : 'divider black';
        const beansWhite = this.props.white ? coffeeBeansWhite : coffeeBeansBlack;
        return (
            <div className="image">
                <hr className={dividerWhite}></hr>
                <img src={beansWhite} alt="coffee-beans-black" />
                <hr className={dividerWhite}></hr>
            </div>
        )
    }
}

export default Divider;