import './CategoryItem.scss';
import jaunaka from '../../../../../resources/img/main/homePage/icons/ic_star_small.svg';
import topIcon from '../../../../../resources/img/main/homePage/icons/ic_popular.svg';
import akcija from '../../../../../resources/img/main/homePage/icons/ic_discount.svg';


export const CategoryItem = (props) => {
    const {id, url, title, description, price, oldPrice , top, discount , newPr} = props;

    return (
        <div className='categoryItem'>
            <img src={url} alt="" className="categoryItem-img"/>
            <h4 className="categoryItem-title">{title}</h4>
            <div className="categoryItem-description">
                {description}
            </div>
            <div className={discount ? "categoryItem-price" : "categoryItem-price none"}>
                {price}
            </div>
            <div className="categoryItem-oldPrice">{oldPrice}</div>
            <div className="categoryItem-wrap">
                <button className="categoryItem-wrap-btn">Pievienot grozam</button>
            </div>
            <div className="categoryItem-block">
                {discount ? <div  className="categoryItem-block-angebot discount"><img className='procent' src={akcija} alt=""/>Akcija -20%</div> : null}
                {top ? <div className="categoryItem-block-angebot top"><img src={topIcon} alt=""/><p className='topHover'>popular</p></div> : null}
                {newPr ?  <div className="categoryItem-block-angebot new"><img src={jaunaka} alt=""/></div> : null}
            </div>
        </div>
    )
}