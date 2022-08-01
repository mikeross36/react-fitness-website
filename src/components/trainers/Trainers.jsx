import React from "react";
import {trainers, trainersSocials} from "./data"

const Trainers = () => {
    return (
        <section className="trainers" id="trainers">
            <div className="heading"><span>trainers</span></div>
            <div className="trainers__container">
                {trainers.map(trainer => {
                    const { id, image, title, name } = trainer;
                    return (
                        <article key={id} className="trainers__info">
                            <img src={image} alt="" className="trainers__img" />
                            <div className="trainers__info-content">
                                <span>{title}</span>
                                <h4 className="trainers__name">{name}</h4>
                                <ul className="trainers__socials">
                                    {trainersSocials.map(social => {
                                        const { id, url, icon } = social;
                                        return (
                                            <li key={id}>
                                                <a href={url}>
                                                    <img src={icon} alt="social icon" width="20px" height="20px"/>
                                                </a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Trainers;