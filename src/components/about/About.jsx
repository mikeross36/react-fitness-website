import React from "react"
import about from "../../images/about-img.jpg"
import { aboutItems } from "./data"

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about__image">
                <img src={about} alt="about pic" className="about__img" />
            </div>
            <div className="about__content">
                <p className="about__intro">about us</p>
                <h2 className="about__title">For everyday athletes</h2>
                <p className="about__text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione quia accusamus dicta inventore nobis obcaecati vero odio, id dolorum. Consequatur ex, aperiam deserunt nostrum perferendis illum unde ipsa? Consequatur, distinctio?
                </p>
                <div className="about__container">
                    {aboutItems.map(item => {
                        const { id, image, title, text } = item;
                        return (
                            <div key={id} className="container__item">
                                <h4 className="container__item-title">
                                    <img src={image} alt="check icon" className="container__item-img" width="20" height="20px" />
                                    {title}
                                </h4>
                                <p className="container__item-text">
                                    {text}
                                </p>
                            </div>
                        )
                    })}
                </div>
                <a href="#home" className="button">read more</a>
            </div>
        </section>
    )
}

export default About;