import nextId from "react-id-generator";
import user1 from "../../images/pic-1.jpg"
import user2 from "../../images/pic-2.jpg"
import user3 from "../../images/pic-3.jpg"
import user4 from "../../images/pic-4.jpg"
import quote from "../../images/double-quotes.svg"

export const clientsSlides = [
    {
        id: nextId(),
        description: '"Gym changed my life. Not only physically, but mentally as well. I am a better mother, better spouse and an all around better human being because of this gym."',
        image: user1,
        name: "jane doe",
        title: "frontend developer",
        icon: quote
    },
    {
        id: nextId(),
        description: '"Gym changed my life. Not only physically, but mentally as well. I am a better mother, better spouse and an all around better human being because of this gym."',
        image: user2,
        name: "john doe",
        title: "frontend developer",
        icon: quote
    },
    {
        id: nextId(),
        description: '"Gym changed my life. Not only physically, but mentally as well. I am a better mother, better spouse and an all around better human being because of this gym."',
        image: user3,
        name: "jane doe",
        title: "frontend developer",
        icon: quote
    },
    {
        id: nextId(),
        description: '"Gym changed my life. Not only physically, but mentally as well. I am a better mother, better spouse and an all around better human being because of this gym."',
        image: user4,
        name: "john doe",
        title: "frontend developer",
        icon: quote
    },
]