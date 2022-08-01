import React, {useState} from "react";
import { homeSlides } from "./data";

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const goToSlide = (slideIndex) => {
        setCurrentSlide(slideIndex);
    };

    return (
        <section className="home" id="home">
            <div className="home__slider">
                <div className="slider__wrapper">
                    {homeSlides.map((slide, slideIdx) => {
                        const { id, text, title, btnVal, image } = slide;

                        let position = "";
                        if (slideIdx === currentSlide) {
                            position = "active-slide"
                        }
                        return (
                            <div key={id} className={`home__slide ${position}`}>
                                <img src={image} alt="home slide pic" className="home__slide-img"/>
                                <div className="slide__content">
                                    <span className="slide__text">{text}</span>
                                    <h1 className="slide__title">{title}</h1>
                                    <a href="#home" className="button">{btnVal}</a>
                                </div>
                            </div>
                        )
                    })}
                    <menu className="slider__nav">
                        {homeSlides.map((slide, index) => {
                            let style = "";
                            if (index === currentSlide) {
                                style = "active-link"
                            }
                            return (
                                <li onClick={()=> goToSlide(index)} key={slide.id} className={`slider__nav-link ${style}`}></li>
                            )
                        })}
                    </menu>
                </div>
            </div>
        </section>
    )
}

export default Home;