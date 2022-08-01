import React, {useState} from "react";
import { clientsSlides } from "./data"
import leftArrow from "../../images/left-arrow.svg"
import rightArrow from "../../images/right-arrow.svg"

const Testimonials = () => {
    const [currentSlide, setCurrrentSlide] = useState(0)

    const prevSlide = (newSlide) => {
        newSlide = (currentSlide - 1 + clientsSlides.length) % clientsSlides.length;
        setCurrrentSlide(newSlide)
    }

    const nextSlide = (newSlide) => {
        newSlide = (currentSlide + 1) % clientsSlides.length;
        setCurrrentSlide(newSlide)
    }
    return (
        <section className="testimonials">
            <div className="testimonials__info">
                <span>testimonials</span>
                <h3 className="testimonials__title">what our clients say</h3>
                <p className="testimonials__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptas praesentium asperiores fugiat, excepturi odit obcaecati a voluptatibus earum quisquam?
                </p>
                <a href="#home" className="button">read more</a>
            </div>
            <div className="testimonials__slider">
                <div className="testimonials__slider-wrapper">
                    {clientsSlides.map((slide, slideIdx) => {
                        const { id, description, image, name, title, icon } = slide;

                        let position = "";
                        if (currentSlide === slideIdx) {
                            position = "active-slide";
                        }
                        return (
                            <article key={id} className={`slide ${position}`}>
                                <p className="slide__description">{description}</p>
                                <div className="user">
                                    <img src={image} alt="user pic" className="user__img" />
                                    <div className="user__info">
                                        <h4 className="user__name">{name}</h4>
                                        <span className="user__title">{title}</span>
                                    </div>
                                    <img src={icon} alt="quote icon" className="quote__icon" width="20px" height="20px"/>
                                </div>
                            </article>
                        )
                    })}
                </div>
                <button className="prev__btn" onClick={()=> prevSlide()}>
                    <img src={leftArrow} alt="left arrow" width="30px" height="30px"/>
                </button>
                <button className="next__btn" onClick={()=> nextSlide()}>
                    <img src={rightArrow} alt="right arrow" width="30px" height="30px"/>
                </button>
            </div>
        </section>
    )
}

export default Testimonials;