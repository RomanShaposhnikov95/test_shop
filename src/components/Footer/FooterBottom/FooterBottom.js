import './FooterBottom.scss';
import company from '../../../resources/img/footer/developedby_Datateks.svg';
import kurpirkt from '../../../resources/img/footer/social/ic-payment-kurpirkt@3x.png';
import salidzini from '../../../resources/img/footer/social/ic-payment-salidzini@3x.png';


export const FooterBottom = () => {
    return (
        <div className='footerBottom'>
            <div className="footerBottom-info">
                <div className="footerBottom-info-year">Reaktīvs.lv © 2019, Visas tiesības pasargātas</div>
                <div className="footerBottom-info-company">
                    Veikalu izstrādāja
                    <img className="footerBottom-info-company-img" src={company} alt=""/>
                </div>
            </div>
            <div className="footerBottom-imgs">
                <div className="footerBottom-imgs-social">
                    <a className="footerBottom-imgs-social-a" href=""><img className="footerBottom-imgs-social-a-img" src={salidzini} alt=""/></a>
                    <a className="footerBottom-imgs-social-a" href=""><img className="footerBottom-imgs-social-a-img" src={kurpirkt} alt=""/></a>
                </div>
                <div className="footerBottom-imgs-cards">
                    <div className="footerBottom-imgs-cards-item">
                        <div className="footerBottom-imgs-cards-item-circle orange"></div>
                        <div className="footerBottom-imgs-cards-item-circle"></div>
                    </div>
                    <div className="footerBottom-imgs-cards-item">
                        <div className="footerBottom-imgs-cards-item-circle blue"></div>
                        <div className="footerBottom-imgs-cards-item-circle"></div>
                    </div>
                    <div className="footerBottom-imgs-cards-item">
                        <div className="footerBottom-imgs-cards-item-card">
                            <div className="footerBottom-imgs-cards-item-card-line"></div>
                            <div className="footerBottom-imgs-cards-item-card-text">visa</div>
                            <div className="footerBottom-imgs-cards-item-card-line col"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}