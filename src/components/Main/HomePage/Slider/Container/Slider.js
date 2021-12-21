import './Slider.scss';
import {useEffect, useRef, useState} from "react";
import {Arrows} from "../Arrow/Arrow";
import {Dots} from "../Dots/Dots";
import {SliderContent} from "../Content/SliderContent";
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {useSelector} from "react-redux";


export const Slider = () => {
    const slides = useSelector(state => state.slider.slides)
    const len = slides.length - 1;
    const [activeIndex, setActiveIndex] = useState(0);
    const [time, setTime] = useState(0)
    const [transition, setTransition] = useState(false)
    const timerIdRef = useRef(null)

    const result = 100 / (5000/100)

    useEffect(() => {
        timerIdRef.current = setTimeout(() => {
            if(time >= 103) {
                setTransition(true)
                setTime(0)
                return setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
            } else {
                setTransition(false)
                return setTime(time + result)
            }
        },100)
        return () => {
            clearTimeout(timerIdRef.current)
        }
    })

    const prevSlide = () => {
        setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        setTime(0)
        setTransition(true)
    }

    const nextSlide = () => {
        setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        setTime(0)
        setTransition(true)
    }

    const onSetIndex = (activeIndex) => {
        setActiveIndex(activeIndex)
        setTime(0)
        setTransition(true)
    }


    return (
        <div className='slider'>
            <div style={{ width: 18, height: 18 , position: "absolute" , zIndex: '1000', right: '20px', top: '20px'}}>
                <CircularProgressbar
                    value={time}
                    styles={{path: {
                            transition: transition? 'none' : 'stroke-dashoffset 0.5s ease 0s',
                            stroke: 'white',
                        },
                        trail: {
                            stroke: 'grey',
                            opacity: 0.5,
                        }
                    }}
                />
            </div>
            <SliderContent activeIndex={activeIndex} sliderImage={slides} />
            <Arrows
                prevSlide={prevSlide}
                nextSlide={nextSlide}
            />
            <Dots
                activeIndex={activeIndex}
                sliderImage={slides}
                onclick={(activeIndex) => onSetIndex(activeIndex)}
            />
        </div>
    )
}