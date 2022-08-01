import nextId from "react-id-generator";
import trainer1 from "../../images/trainer-1.jpg"
import trainer2 from "../../images/trainer-2.jpg"
import trainer3 from "../../images/trainer-3.jpg"
import trainer4 from "../../images/trainer-4.jpg"
import facebook from "../../images/facebook.svg"
import twitter from "../../images/twitter.svg"
import pinterest from "../../images/pinterest.svg"
import instagram from "../../images/instagram.svg"

export const trainers = [
    {
        id: nextId(),
        image: trainer1,
        title: "expert trainer",
        name: "john smith"
    },
    {
        id: nextId(),
        image: trainer2,
        title: "expert trainer",
        name: "jane smith"
    },
    {
        id: nextId(),
        image: trainer3,
        title: "expert trainer",
        name: "john smith"
    },
    {
        id: nextId(),
        image: trainer4,
        title: "expert trainer",
        name: "jane smith"
    },
]

export const trainersSocials = [
    {
        id: nextId(),
        url: "https://facebook.com/",
        icon: facebook
    },
    {
        id: nextId(),
        url: "https://twitter.com/",
        icon: twitter
    },
    {
        id: nextId(),
        url: "https://pinterest.com/",
        icon: pinterest
    },
    {
        id: nextId(),
        url: "https://instagram.com/",
        icon: instagram
    },
]