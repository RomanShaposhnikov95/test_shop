import './Arrow.scss';


export const Arrows = ({prevSlide, nextSlide}) => {
    return (
        <div className="arrows">
          <span className="arrows-prev" onClick={prevSlide}>
            &#10094;
          </span>
                <span className="arrows-next" onClick={nextSlide}>
            &#10095;
          </span>
        </div>
    )
}