import React from "react";
import { blogs } from "./data";

const Blogs = () => {
    return (
        <section className="blogs" id="blogs">
            <div className="heading"><span>daily posts</span></div>
            <div className="blogs__container">
                <div className="blogs__container-wrapper">
                    {blogs.map(blog => {
                        const { id, image, text, date, title, description } = blog;
                        return (
                            <article key={id} className="blogs__post">
                                <div className="post__image">
                                    <img src={image} alt="post pic" className="post__img"/>
                                </div>
                                <div className="post__content">
                                    <div className="post__link">
                                        <a href="#home">{text}</a>
                                        <span>|</span>
                                        <span className="post__date">{date}</span>
                                    </div>
                                    <h3 className="post__title">{title}</h3>
                                    <p className="post__description">{description}</p>
                                    <a href="#home" className="button">read more</a>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Blogs;