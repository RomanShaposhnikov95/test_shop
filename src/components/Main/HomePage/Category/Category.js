import './Category.scss';
import next from '../../../../resources/img/main/homePage/ic-double-arrows-right.svg';
import {CategoryItem} from "./CategoryItem/CategoryItem";




export const Category = ({title, icon, info}) => {
    return (
        <div className='category'>
            <div className="category-header">
                <div className='category-header-title'>
                    <img src={icon} alt=""/>
                    <h1 className='category-header-title-text'>{title}</h1>
                </div>
                <a href='#' className="category-header-link">
                    Visas jaunās preces
                    <span className="category-header-link-span"><img src={next} alt=""/></span>
                </a>
            </div>

            <div className="category-container">
                {
                    info.map(el => (
                        <CategoryItem key={el.id} {...el}/>
                    ))
                }
            </div>
        </div>
    )
}