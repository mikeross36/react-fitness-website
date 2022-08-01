import React from "react";
import {offers} from "./data"

const Offers = () => {
    return (
        <section className="offers" id="offers">
            <div className="heading"><span>offers</span></div>
            <div className="offers__container">
                {offers.map(offer => {
                    const { id, image, icon, title, description } = offer;
                    return (
                        <article key={id} className="offers__box">
                            <div className="offers__box-image">
                                <img src={image} alt="offers pic" className="offers__box-img"/>
                            </div>
                            <div className="offers__box-content">
                                <img src={icon} alt="box icon" className="box__icon" />
                                <h4 className="box__title">{title}</h4>
                                <p className="box__description">{description}</p>
                                <a href="#home" className="button">read more</a>
                            </div>
                        </article>
                    )
               })}
            </div>
        </section>
    )
}

export default Offers;