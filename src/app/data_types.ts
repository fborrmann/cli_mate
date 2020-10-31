export class Project {
    id: number;
    location: string;
    time: Date;
    organisator: User;
    description: string;
    days: number;
    people: number;
}

export class User {
    id: number;
    name: string;
    mail: string;
    password: string;
    projects: Project[];
}