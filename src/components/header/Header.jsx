import React, {useState} from "react"
import logo from "../../images/gym-logo.svg"
import burger from "../../images/menu-btn.svg"
import { links } from "./data"

const Header = () => {
    const [showMobMenu, setShowMobMenu] = useState(false)

    const toggleMobMenu = () => {
        setShowMobMenu(!showMobMenu)
    }

    const closeMobMenu = () => {
        setShowMobMenu(false)
    }

    return (
        <header className="header">
            <a href="#home" className="header__logo">
                <img src={logo} alt="header logo" width="40px" height="40px" />
                gym
            </a>
            <div className="menu__btn" onClick={toggleMobMenu}>
                <img src={burger} alt="menu burger btn" className={`burger__btn ${showMobMenu && "btn-active"}`} width="40px" height="40px"/>
            </div>
            <nav className={`navbar ${showMobMenu && "active"}`}>
                {links.map(link => {
                    const { id, url, text } = link;
                    return (
                        <a key={id} href={url} className="navbar__link" onClick={closeMobMenu}>
                            {text}
                        </a>
                    )
                })}
            </nav>
        </header>
    )
}

export default Header;