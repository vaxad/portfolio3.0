import clientPromise from "../../../lib/mongodb";
import { NextRequest, NextResponse } from "next/server"
export async function POST(req: NextRequest) {
    try {
        const { email, message } = await req.json()
        const client = await clientPromise;
        const db = client.db("test");
        const response = await db.collection("responses").insertOne({
            email: email, message: message
        })
        return NextResponse.json({ response: response })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: error })
    }
}