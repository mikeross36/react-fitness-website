import nextId from "react-id-generator";
import offer1 from "../../images/f-img-1.jpg"
import offer2 from "../../images/f-img-2.jpg"
import offer3 from "../../images/f-img-3.jpg"
import dumbell from "../../images/dumbell-gym.svg"
import gymman from "../../images/gym-man.svg"
import gymwoman from "../../images/gym-woman.svg"

export const offers = [
    {
        id: nextId(),
        image: offer1,
        icon: dumbell,
        title: "body building",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, atque."
    },
    {
        id: nextId(),
        image: offer2,
        icon: gymman,
        title: "gym for men",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, atque."
    },
    {
        id: nextId(),
        image: offer3,
        icon: gymwoman,
        title: "gym for women",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, atque."
    },
]