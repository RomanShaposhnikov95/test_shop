import './Dots.scss';



export const Dots = ({activeIndex, onclick, sliderImage}) => {
    return (
        <div className="all-dots">
            {sliderImage.map((slide, index) => (
                <span
                    key={index}
                    className={`${activeIndex === index ? "all-dots-dot active-dot" : "all-dots-dot"}`}
                    onClick={() => onclick(index)}
                ></span>
            ))}
        </div>
    )
}