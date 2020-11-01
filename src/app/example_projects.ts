import { Project } from "./data_types";

export const projects: Project[] = [
    {
        id: 1,
        location: "Munich",
        date: "08/11/2020",
        organisator: {
            id: 3,
            name: "Students for Future Munich"
        },
        description: "Help us organize a climate strike event",
        time: "4:15pm",
        people: 10,
        days: 2,
        image: "/assets/sff.jpeg"
    },
    {
        id: 2,
        location: "online",
        date: "08/11/2020",
        organisator: { 
            id: 2, 
            name: "Christina Schmidt"
        },
        description: "I need help with my food sharing app",
        time: "2:00pm",
        people: 2,
        days: 14,
        image: "/assets/default.PNG"
    },
    {
        id: 2,
        location: "Munich",
        date: "08/11/2020",
        organisator: { 
            id: 2, 
            name: "Alex Meier"
        },
        description: "I would like to clean up the English Garden",
        time: "3:30pm",
        people: "unlimited",
        days: 2,
        image: "/assets/default.PNG"
    },
    {
        id: 1,
        location: "Munich",
        date: "08/11/2020",
        organisator: {
            id: 4,
            name: "Asta Umweltreferat TUM"
        },
        time: "4:15pm",
        description: "We would like to organize a webinar",
        people: 10,
        days: 4,
        image: "/assets/asta.png"
    },
    {
        id: 1,
        location: "Munich",
        date: "08/11/2020",
        organisator: {
            id: 1,
            name: "Rehab republic"
        },
        description: "Please help us to make rehab republic even better",
        people: 3,
        time: "4:15pm",
        days: 7,
        image: "/assets/rehab.jpg"
    },
    {
        id: 1,
        location: "Munich",
        date: "08/11/2020",
        organisator: {
            id: 1,
            name: "Olydorf Gassengarten"
        },
        description: "We need people that would like to contribute to our garden",
        people: 5,
        time: "4:15pm",
        days: 7,
        image: "/assets/gassengarten.jpg"
    }
]