import './FooterCenter.scss';
import facebook from '../../../resources/img/social/ic-social-facebook copy 3.svg';
import logo from '../../../resources/img/logo@3x.png';
import phone from '../../../resources/img/info-icons/ic-call-us.svg';


export const FooterCenter = () => {
    return (
        <div className='footerCenter'>
            <div className="footerCenter-logo">
                <li className="footerCenter-logo-img"><a href="#"><img src={logo} alt="" className="footerCenter-logo-img"/></a></li>
                <div className="footerCenter-logo-title">
                    Uzņēmuma vai projekta īss apraksts.
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod.
                </div>
                <li className='footerCenter-logo-social'><a href="#"><img src={facebook} alt=""/></a></li>
            </div>
            <div className="footerCenter-menu">
                <div className="footerCenter-menu-title">Lapas navigācija</div>
                <ul className="footerCenter-menu-category">
                    <li className='footerCenter-menu-category-link'>Sākums</li>
                    <li className='footerCenter-menu-category-link'>Preču katalogs</li>
                    <li className='footerCenter-menu-category-link'>Par mums</li>
                    <li className='footerCenter-menu-category-link'>Mūsu kontakti</li>
                    <li className='footerCenter-menu-category-link'>Jaunumi</li>
                </ul>
            </div>
            <div className="footerCenter-menu">
                <div className="footerCenter-menu-title">Populārākas kategorijas</div>
                <ul className="footerCenter-menu-category">
                    <li className='footerCenter-menu-category-link'>Kategorijas nosaukums</li>
                    <li className='footerCenter-menu-category-link'>Cita kategorija</li>
                    <li className='footerCenter-menu-category-link'>Cita nosaukuma kategorija</li>
                    <li className='footerCenter-menu-category-link'>Populārākās preces</li>
                    <li className='footerCenter-menu-category-link'>Jaunākās preces</li>
                    <li className='footerCenter-menu-category-link'>Visas preces</li>
                </ul>
            </div>
            <div className="footerCenter-menu">
                <div className="footerCenter-menu-title">Klientu atbalsts</div>
                <div className="footerCenter-menu-category">
                    <div className="footerCenter-menu-category-info">
                        <div className="footerCenter-menu-category-info-wrapper">
                            <div className="footerCenter-menu-category-info-wrapper-title">E-pasta adrese</div>
                            <div className="footerCenter-menu-category-info-wrapper-data">reaktivs@reaktivs.lv</div>
                        </div>
                        <img className='footerCenter-menu-category-info-icon' src={phone} alt=""/>
                    </div>
                    <div className="footerCenter-menu-category-info">
                        <div className="footerCenter-menu-category-info-wrapper">
                            <div className="footerCenter-menu-category-info-wrapper-title">Uzziņu tālrunis</div>
                            <div className="footerCenter-menu-category-info-wrapper-data">+371 28 335 544</div>
                        </div>
                        <img className='footerCenter-menu-category-info-icon' src={phone} alt=""/>
                    </div>
                    <div className="footerCenter-menu-category-info">
                        <div className="footerCenter-menu-category-info-wrapper">
                            <div className="footerCenter-menu-category-info-wrapper-title">Darba dienās 10:00 - 18:00</div>
                            <div className="footerCenter-menu-category-info-wrapper-data">Rīgas iela 113A, Salaspils</div>
                        </div>
                        <img className='footerCenter-menu-category-info-icon' src={phone} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}