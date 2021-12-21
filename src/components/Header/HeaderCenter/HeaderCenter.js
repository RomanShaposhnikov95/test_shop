import './HeaderCenter.scss';
import logo from '../../../resources/img/logo@3x.png';
import phone from '../../../resources/img/info-icons/ic-call-us.svg';
import user from '../../../resources/img/info-icons/ic-user.svg';
import cart from '../../../resources/img/info-icons/ic-cart.svg';
import serachIcon from '../../../resources/btn/ic-search.svg';
import btn from '../../../resources/btn/ic_dropdown_arrow copy 5.svg';


export const HeaderCenter = () => {
    return (
        <div className='headerCenter'>
            <div className="headerCenter-search">
                <li><a href="#"><img src={logo} alt="" className="headerCenter-search-logo"/></a></li>
                <div className="headerCenter-search-container">
                    <button className="headerCenter-search-container-btn"><img src={serachIcon} alt=""/></button>
                    <input placeholder='Meklēt preci..' type="text" className="headerCenter-search-container-input"/>
                </div>
            </div>

            <div className="headerCenter-info">
                <div className="headerCenter-info-item">
                    <img src={phone} alt="" className="headerCenter-info-item-icon"/>
                    <div className="headerCenter-info-container">
                        <div className="headerCenter-info-item-container-title">reaktivs@reaktivs.lv</div>
                        <div className="headerCenter-info-item-container-span">+371 28 335 544</div>
                    </div>
                </div>
                <div className="headerCenter-info-item">
                    <img src={user} alt="" className="headerCenter-info-item-icon"/>
                    <div className="headerCenter-info-container">
                        <div className="headerCenter-info-item-container-title">Klienta profils</div>
                        <div className="headerCenter-info-item-container-span"><a href="#">Ienākt</a><span className='fraction'>/</span><a href="#">Reģistrācija</a></div>
                    </div>
                </div>
                <div className="headerCenter-info-item">
                    <img src={cart} alt="" className="headerCenter-info-item-icon"/>
                    <div className="headerCenter-info-container">
                        <div className="headerCenter-info-item-container-title">Tavs grozs</div>
                        <div className="headerCenter-info-item-container-span"><span>0.00 EUR</span><div className="spanArrow">
                            <img src={btn} alt=""/></div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}