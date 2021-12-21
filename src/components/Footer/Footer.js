import './Footer.scss';
import {FooterTop} from "./FooterTop/FooterTop";
import {FooterCenter} from "./FooterCenter/FooterCenter";
import {FooterBottom} from "./FooterBottom/FooterBottom";


export const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-fons">
                <div className="container">
                    <FooterTop/>
                </div>
            </div>
            <div className="container">
                <FooterCenter/>
                <FooterBottom/>
            </div>
        </div>
    )
}