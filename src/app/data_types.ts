export class Project {
    id: number;
    location: string;
    date: string;
    time: string;
    organisator: User;
    description: string;
    days: number;
    people: number;
    image?: string;
}

export class User {
    id?: number;
    name: string;
    mail?: string;
    password?: string;
    projects?: Project[];
    webpage?: string;

    constructor(name: string) {
        this.name = name;
    }
}