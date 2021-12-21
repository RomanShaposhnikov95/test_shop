import './Menu.scss';
import {useSelector} from "react-redux";
import arrow from '../../../../resources/btn/ic_small_arrow_right.svg'



export const Menu = () => {
    const content = useSelector(state => state.menu.content[0].Celtniecības)
    const category = useSelector(state => state.menu.category)

    return (
        <div className='menu'>
            <div className="container">
               <div className="menu-wrapper">
                   <ul className='menu-wrapper-list'>

                       {
                           category.map((el ,index) => (
                               <li key={index} className='menu-wrapper-list-link'><span className='leftArrow'><img
                                   src={arrow} alt=""/></span><a className={el.active ? 'active': ''} href="#">{el.title}</a></li>
                           ))
                       }
                   </ul>
               <div className="menu-wrapper-value">
                        <h1 className="menu-wrapper-value-title">
                            Celtniecības iekārtas un instrumenti
                        </h1>
                        <div className="menu-wrapper-value-content">
                            {
                                content.map((el, index) => (
                                    <li key={index} className='menu-wrapper-value-content-link'><a href="#">{el.title}</a></li>
                                ))
                            }
                        </div>
                   </div>
               </div>
            </div>
        </div>
    )
}

