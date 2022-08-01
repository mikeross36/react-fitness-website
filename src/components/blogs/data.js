import nextId from "react-id-generator";
import blogImg1 from "../../images/blog-1.jpg"
import blogImg2 from "../../images/blog-2.jpg"
import blogImg3 from "../../images/blog-3.jpg"
import blogImg4 from "../../images/blog-4.jpg"

export const blogs = [
    {
        id: nextId(),
        image: blogImg1,
        text: "by user",
        date: "29th july 2022",
        title: "gym etiquette for beginners",
        description: "World-renowned bodybuilder and fitness influencer represents the future of the iconic gym."
    },
    {
        id: nextId(),
        image: blogImg2,
        text: "by user",
        date: "29th july 2022",
        title: "why breathwork matters",
        description: "World-renowned bodybuilder and fitness influencer represents the future of the iconic gym."
    },
    {
        id: nextId(),
        image: blogImg3,
        text: "by user",
        date: "29th july 2022",
        title: "work out with a friend",
        description: "World-renowned bodybuilder and fitness influencer represents the future of the iconic gym."
    },
    {
        id: nextId(),
        image: blogImg4,
        text: "by user",
        date: "29th july 2022",
        title: "how to be a gym citizen",
        description: "World-renowned bodybuilder and fitness influencer represents the future of the iconic gym."
    },
]