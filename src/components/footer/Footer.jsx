import React from "react"
import { links } from "../header/data"
import {trainersSocials} from "../trainers/data"
import { hoursLinks, infoLinks } from "./data"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__box">
                    <h4 className="footer__box-title">quick links</h4>
                    {links.map(link => {
                        const { id, url, text } = link;
                        return (
                            <a key={id} href={url} className="footer__link">{text}</a>
                        )
                    })}
                </div>
                <div className="footer__box">
                    <h4 className="footer__box-title">opening hours</h4>
                    {hoursLinks.map(link => {
                            const { id, day, hour } = link;
                            return (
                                <p key={id} className="hours__link">{day}<span>{hour}</span></p>
                            )
                        })}
                </div>
                <div className="footer__box">
                    <h4 className="footer__box-title">contact info</h4>
                    {infoLinks.map(link => {
                        const { id, image, text } = link;
                        return (
                            <p key={id} className="info__link">
                                <img src={image} alt="info pic" width="20px" height="20px" />
                                {text}
                            </p>
                        )
                    })}
                    <div className="share__box">
                        {trainersSocials.map(social => {
                            const { id, url, icon } = social;
                            return (
                                <a key={id} href={url}>
                                    <img src={icon} alt="social icon" width="20px" height="20px"/>
                                </a>
                            )
                        })}
                    </div>
                </div>
                <div className="footer__box">
                    <h4 className="footer__box-title">newsletter</h4>
                    <p className="subscribe__description">subscibe for latest updates</p>
                    <form action="#" className="footer__form">
                        <input type="email" className="email__input" placeholder="enter email..." />
                        <input type="submit" value="submit" className="button" />
                    </form>
                </div>
            
            </div>
            <div className="copy__rights">&copy;DodaDesign 2022 All Rights Reserved</div>
        </footer>
    )
}

export default Footer;