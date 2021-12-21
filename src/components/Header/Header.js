import './Header.scss';
import {HeaderTop} from "./HeaderTop/HeaderTop";
import {HeaderCenter} from "./HeaderCenter/HeaderCenter";
import {HeaderBottom} from "./HeaderBottom/HeaderBottom";
import {Menu} from "./HeaderBottom/HeaderTopMenu/Menu";
import {useSelector} from "react-redux";


export const Header = () => {
    const btn = useSelector(state => state.menu.menu)
    return (
        <div className='header'>
            <div className='container'>
                <HeaderTop/>
            </div>
            <div className="header-border"></div>
            <div className="container">
                <HeaderCenter/>
            </div>
            <div className="header-fons">
                <div className="container">
                    <HeaderBottom/>
                </div>
            </div>
            <div style={{display: btn ? 'block' : 'none'}}>
                <Menu/>
            </div>
        </div>

    )
}