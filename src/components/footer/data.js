import nextId from "react-id-generator";
import phone from "../../images/phone-icon.svg"
import envelope from "../../images/envelope-icon.svg"
import location from "../../images/location-icon.svg"

export const hoursLinks = [
    {
        id: nextId(),
        day: "monday",
        hour: "7:00am - 10:30pm"
    },
    {
        id: nextId(),
        day: "tuesday",
        hour: "7:00am - 10:30pm"
    },
    {
        id: nextId(),
        day: "wednesday",
        hour: "7:00am - 10:30pm"
    },
    {
        id: nextId(),
        day: "thursday",
        hour: "7:00am - 10:30pm"
    },
    {
        id: nextId(),
        day: "friday",
        hour: "7:00am - 10:30pm"
    },
    {
        id: nextId(),
        day: "saturday",
        hour: "7:00am - 10:30pm"
    },
    {
        id: nextId(),
        day: "sunday",
        hour: "closed"
    },
]

export const infoLinks = [
    {
        id: nextId(),
        image: phone,
        text: "+381 123 456 78"
    },
    {
        id: nextId(),
        image: phone,
        text: "+381 876 543 21"
    },
    {
        id: nextId(),
        image: envelope,
        text: "localgym@mail.com"
    },
    {
        id: nextId(),
        image: location,
        text: "novi sad 21000"
    },
]