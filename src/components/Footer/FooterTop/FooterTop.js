import './FooterTop.scss';
import info from '../../../resources/img/info-icons/ic-search-something.svg'


export const FooterTop = () => {
    return (
        <div className='footerTop'>
            <div className="footerTop-info">
                <img className="footerTop-info-img" src={info} alt=""/>
                <div className="footerTop-info-title">
                    Neatradāt, ko meklējāt? Droši dodiet ziņu
                    un mēs Jums palīdzēsim atrast meklēto!
                </div>
            </div>
            <button className="footerTop-btn">Sazināties ar Mums</button>
        </div>
    )
}