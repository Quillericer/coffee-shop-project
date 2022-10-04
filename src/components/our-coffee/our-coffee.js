import SectionHeader from '../section-header/section-header';
import AboutSection from '../about-section/about-section';
import CoffeeFilter from '../coffee-filter/coffee-filter';
import CoffeeItemAbout from '../coffee-item-about/coffee-item-about';

import headerImg from '../../assets/img/our-coffee-promo.jpg';
import aboutImg from '../../assets/img/about-img.jpg';

import './our-coffee.scss';

const OurCoffee = (props) => {
        const descr = 'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.'
        return (
            <>
                <SectionHeader img={headerImg} label='Our Coffee' changePage={props.changePage}/>
                <AboutSection img={aboutImg} label='About out goods' descr={descr}/>
                <CoffeeFilter filterPanel={props.filterPanel} data={props.data} changeRegion={props.changeRegion} onFilter={props.onFilter} filter={props.filter}/>
            </>
        )
}

export default OurCoffee;