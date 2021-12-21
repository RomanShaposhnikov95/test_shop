import './HeaderTop.scss';
import btn from '../../../resources/btn/ic_dropdown_arrow copy 5.svg';
import facebook from '../../../resources/img/social/ic-social-facebook copy 3.svg'
import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeLanguage} from "../../../services/MenuSlice";




export const HeaderTop = () => {
    const dispatch = useDispatch();
    const lang = useSelector(state => state.menu.language);
    const langNow = useSelector(state => state.menu.langNow);
    const [guess,setGuess] = useState('none');

    const rootEl = useRef(null);

    useEffect(() => {
        const onClick = e => rootEl.current.contains(e.target) || setGuess('none');
        document.addEventListener('click', onClick);
        return () => {
            document.removeEventListener('click', onClick);
            setGuess('none')
        }
    }, [langNow]);

    const onGetLang = (lang) => {
        dispatch(changeLanguage(lang))
    }

    return (
        <div className='headerTop'>
            <div className="headerTop-wrapper">
                <div className="headerTop-wrapper-languages" ref={rootEl} onClick={() => setGuess('block')}>
                    <div className="headerTop-wrapper-languages-item">
                        <img src={langNow.flag} alt="" className="headerTop-wrapper-languages-item-flag"/>
                        <span className="headerTop-wrapper-languages-item-title">{langNow.lang}</span>
                        <span className="headerTop-wrapper-languages-item-value"><img src={btn} alt=""/></span>
                    </div>
                    <div className="headerTop-wrapper-languages-wrapper" style={{display: `${guess}`}}>
                        {
                            lang && lang.length > 0 ? lang.map(el => (
                                <div key={el.id} onClick={() => onGetLang(el)} className="headerTop-wrapper-languages-wrapper-item">
                                    <img src={el.flag} alt="" className="headerTop-wrapper-languages-item-flag"/>
                                    <span className="headerTop-wrapper-languages-item-title">{el.lang}</span>
                                </div>
                            )) : 'Loading...'
                        }
                    </div>
                </div>
                <div className='headerTop-wrapper-border'></div>
                <ul className="headerTop-wrapper-lists">
                    <li className="headerTop-wrapper-lists-link"><a href="#">Preces izvēle</a></li>
                    <li className="headerTop-wrapper-lists-link"><a href="#">Atteikuma tiesības</a></li>
                    <li className="headerTop-wrapper-lists-link"><a href="#">Apmaksa</a></li>
                    <li className="headerTop-wrapper-lists-link"><a href="#">Piegāde</a></li>
                    <li className="headerTop-wrapper-lists-link"><a href="#">Par mums</a></li>
                    <li className="headerTop-wrapper-lists-link"><a href="#">Kontakti</a></li>
                </ul>
            </div>
            <li className='headerTop-link'><a href="#"><img src={facebook} alt=""/></a></li>
        </div>
    )
}