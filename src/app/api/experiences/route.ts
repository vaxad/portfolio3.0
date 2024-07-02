import clientPromise from "../../../lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const client = await clientPromise;
        const db = client.db("test");
        const experiences = await db.collection("expirences").find({}).toArray()
        return NextResponse.json({ experiences: experiences })
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }
}