import { Project, User } from "./data_types";

export const projects: Project[] = [
    {
        id: 1,
        location: "Munich",
        time: new Date(),
        organisator: new User(),
        description: "Please help us to make rehab republic even better",
        people: 3,
        days: 7
    },
    {
        id: 2,
        location: "Stockholm",
        time: new Date(),
        organisator: new User(),
        description: "I would like to make an app.",
        people: 4,
        days: 14
    },
    {
        id: 1,
        location: "Paris",
        time: new Date(),
        organisator: new User(),
        description: "Help us organize a webinar",
        people: 10,
        days: 8
    },
    {
        id: 1,
        location: "Barcelona",
        time: new Date(),
        organisator: new User(),
        description: "We would like to organize a climate strike.",
        people: 10,
        days: 4
    }
]