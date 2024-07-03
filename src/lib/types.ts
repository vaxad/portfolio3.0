export type RepoData = {
    title: string;
    desc: string;
    url: string;
    img?: string[];
    web: string;
    id: string;
}

export interface Project {
    title: string;
    desc: string;
    url: string;
    img: (string | null)[];
    web: string;
    id: string;
    _id: string;
}

export interface WebProject extends Project { }

export interface ServerProject {
    title: string;
    desc: string;
    url: string;
    web: string;
    id: string;
    _id: string;
    img: string[];
}

export interface AppProject extends Project { }

export interface ProjectData {
    web: WebProject[];
    server: ServerProject[];
    app: AppProject[];
}

export type Achievement = {
    _id: string,
    title: string,
    desc: string,
    url: string,
    img: string,
    order: string,
}

export type Experience = {
    _id: string
    role: string
    company: string
    date: string
    location: string
    img: string
    skills: string[]
    url: string
    order: string
}