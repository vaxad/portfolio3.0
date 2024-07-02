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