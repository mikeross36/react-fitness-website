import React from "react"
import {pricingItems} from "./data"

const Pricing = () => {
    return (
        <section className="pricing" id="pricing">
            <div className="pricing__info">
                <h3 className="pricing__info-title">Choose Your Membership Plan</h3>
                <p className="pricing__info-description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam dolore excepturi ea suscipit fugiat cum quae, rerum optio mollitia! Tempora?
                </p>
                {pricingItems.map(item => {
                    const { id, icon, text } = item;
                    return (
                        <p key={id} className="pricing__info-includes">
                            <img src={icon} alt="check icon" className="pricing__info-icon" width="20px" height="20px" />
                            {text}
                        </p>
                    )
                })}
                <a href="#home" className="button">all pricing</a>
            </div>

            <article className="plan basic">
                <h3 className="plan__title">basic plan</h3>
                <div className="plan__price"><span>€</span>30<span>per month</span></div>
                <div className="plan__includes">
                    {pricingItems.map(item => {
                        const { id, icon, text } = item;
                        return (
                            <p key={id} className="pricing__info-includes">
                                <img src={icon} alt="check icon" className="pricing__info-icon" width="20px" height="20px" />
                                {text}
                            </p>
                        )
                    })}
                    <a href="#home" className="button">get started</a>
                </div>
            </article>
            {/*  */}
            <article className="plan">
                <h3 className="plan__title">premium plan</h3>
                <div className="plan__price"><span>€</span>90<span>12 month</span></div>
                <div className="plan__includes">
                    {pricingItems.map(item => {
                        const { id, icon, text } = item;
                        return (
                            <p key={id} className="pricing__info-includes">
                                <img src={icon} alt="check icon" className="pricing__info-icon" width="20px" height="20px" />
                                {text}
                            </p>
                        )
                    })}
                    <a href="#home" className="button">get started</a>
                </div>
            </article>
        </section>
    )
}

export default Pricing;