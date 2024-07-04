"use server"
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function getProjects() {
    try {
        const client = await clientPromise;
        const db = client.db("test");
        const projects = await db.collection("projects").find({}).toArray()
        return JSON.parse(JSON.stringify({ web: projects[0].web, server: projects[0].server, app: projects[0].app }))
    } catch (error) {
        console.log(error)
        return null
    }
}

export async function getExperiences() {
    try {
        const client = await clientPromise;
        const db = client.db("test");
        const experiences = await db.collection("expirences").find({}).toArray()
        return JSON.parse(JSON.stringify({ experiences }))
    } catch (error) {
        console.log({ error })
        return null
    }
}

export async function getAchievements() {
    try {
        const client = await clientPromise;
        const db = client.db("test");
        const achievements = await db.collection("achievements").find({}).toArray()
        return JSON.parse(JSON.stringify({ achievements }))
    } catch (error) {
        console.log({ error })
        return null
    }
}
export async function storeMessage({ email, message }: { email: string, message: string }) {
    try {
        const client = await clientPromise;
        const db = client.db("test");
        const response = await db.collection("responses").insertOne({
            email: email, message: message, date: new Date()
        })
        return JSON.parse(JSON.stringify({ response: response }))
    } catch (error) {
        console.log({ error })
        return null
    }
}