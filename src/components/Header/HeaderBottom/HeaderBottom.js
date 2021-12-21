import './HeaderBottom.scss';
import btn from '../../../resources/btn/ic-category-arrow-down.svg'
import {useDispatch, useSelector} from "react-redux";
import {menuToogle} from "../../../services/MenuSlice";
import arrow from "../../../resources/btn/ic_small_arrow_right.svg";



export const HeaderBottom = () => {
    const toogle = useSelector(state => state.menu.menu)
    const category = useSelector(state => state.menu.category)

    const dispatch = useDispatch()

    const onOpenMenu = () => {
        dispatch(menuToogle())
    }
    return (
        <div className='headerBottom'>
            {
                toogle ? <div className="headerBottom-btn" style={{background:'#F78400', fontSize: '25px', color: 'white'}} onClick={onOpenMenu}>
                        &#215;
                    </div>
                    :
                    <div className="headerBottom-btn" onClick={onOpenMenu}>
                        <span className="headerBottom-btn-span"></span>
                        <span className="headerBottom-btn-span"></span>
                        <span className="headerBottom-btn-span"></span>
                    </div>
            }
            {
                category.map((el, index) => (
                    <div key={index} className='headerBottom-category'>
                        <div className="headerBottom-category-title">{el.title}</div>
                        <span className="headerBottom-category-span"><img src={btn} alt=""/></span>
                    </div>
                ))
            }
        </div>
    )
}