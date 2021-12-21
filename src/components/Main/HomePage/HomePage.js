import './HomePage.scss';
import {Slider} from "./Slider/Container/Slider";
import {Category} from "./Category/Category";
import jaunaka from '../../../resources/img/main/homePage/ic_titleIcon_new.svg';
import akcija from '../../../resources/img/main/homePage/ic_titleIcon_discount.svg';
import topIcon from '../../../resources/img/main/homePage/ic_titleIcon_popular.svg';
import phone from '../../../resources/img/info-icons/ic-call-us.svg';
import {useSelector} from "react-redux";


export const HomePage = () => {
    const {newProduct, discount, top} = useSelector(state => state.product.product)

    return (
        <div className='homePage'>
            <div className="container">
                <div className="homePage-slider">
                    <Slider/>
                    <div className="homePage-slider-info">
                       <div className="homePage-slider-info-wrapper">
                           <h1 className="homePage-slider-info-wrapper-title">Veikala darba laiks</h1>
                           <div className="homePage-slider-info-wrapper-item">
                               <div className="homePage-slider-info-wrapper-item-wrap">
                                   <div className="homePage-slider-info-wrapper-item-wrap-title">Darba dienās</div>
                                   <div className="homePage-slider-info-wrapper-item-wrap-info">08.00 - 18.00</div>
                               </div>
                               <img className="homePage-slider-info-wrapper-item-img" src={phone} alt=""/>
                           </div>
                           <div className="homePage-slider-info-wrapper-item">
                               <div className="homePage-slider-info-wrapper-item-wrap">
                                   <div className="homePage-slider-info-wrapper-item-wrap-title">Brīvdienās</div>
                                   <div className="homePage-slider-info-wrapper-item-wrap-info">Slēgts</div>
                               </div>
                               <img className="homePage-slider-info-wrapper-item-img" src={phone} alt=""/>
                           </div>
                           <div className="homePage-slider-info-wrapper-item">
                               <div className="homePage-slider-info-wrapper-item-wrap">
                                   <div className="homePage-slider-info-wrapper-item-wrap-title">Veikala adrese</div>
                                   <div className="homePage-slider-info-wrapper-item-wrap-info">Rīgas iela 113A, Salaspils</div>
                               </div>
                               <img className="homePage-slider-info-wrapper-item-img" src={phone} alt=""/>
                           </div>
                           <div className="homePage-slider-info-wrapper-item">
                               <div className="homePage-slider-info-wrapper-item-wrap">
                                   <div className="homePage-slider-info-wrapper-item-wrap-title">E-pasta adrese</div>
                                   <div className="homePage-slider-info-wrapper-item-wrap-info">reaktivs@reaktivs.lv</div>
                               </div>
                               <img className="homePage-slider-info-wrapper-item-img" src={phone} alt=""/>
                           </div>
                       </div>
                        <div className="homePage-slider-info-design">
                            <img className='homePage-slider-info-design-rocket' src="https://static.tildacdn.com/tild6138-3933-4133-b636-343736626534/_.png" alt=""/>
                            <img className='homePage-slider-info-design-cloud' src="https://damaxtravel.com/wp-content/uploads/2014/03/oblaka.png" alt=""/>
                        </div>
                    </div>
                </div>
                {newProduct ? <Category info={newProduct} icon={jaunaka} title={'Jaunākās preces'}/> : 'loading...'}
                {newProduct ? <Category info={discount} icon={akcija} title={'Akcijas preces'}/> : 'loading...'}
                {newProduct ? <Category info={top} icon={topIcon} title={'Pirktākās preces'}/> : 'loading...'}
            </div>
        </div>
    )
}