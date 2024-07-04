"use client"
import { storeMessage } from "@/actions/actions"
import { FormEvent, useState } from "react"

export default function Contact() {
    const [email, setemail] = useState("")
    const [msg, setmsg] = useState("")
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()
            setemail("")
            setmsg("")
            const res = await storeMessage({ email, message: msg })
            const res3 = await fetch("https://portfolio-server-am21.onrender.com/mail/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    message: msg
                })
            })
        } catch (error) {
            console.log({ error })
        }
    }
    return (
        <form onSubmit={handleSubmit} className=" flex flex-col pt-12 w-full gap-4">
            <div className="fade-animation" style={{ animationDelay: "2.4s", animationDuration: "0.2s" }}>
                <h5 className=" text-2xl pb-2 ">Email</h5>
                <input maxLength={100} type="email" placeholder="youremail@gmail.com" required value={email} onChange={(e) => setemail(e.target.value)} className=" w-full py-2 px-4 placeholder:italic text-xl outline-none" />
            </div>
            <div className="fade-animation" style={{ animationDelay: "2.7s", animationDuration: "0.2s" }}>
                <h5 className=" text-2xl pb-2">Message</h5>
                <textarea maxLength={2000} placeholder="Love your work, here are my bank credentials..." rows={7} required value={msg} onChange={(e) => setmsg(e.target.value)} className=" w-full py-2 px-4 placeholder:italic text-xl outline-none" />
            </div>
            <button type="submit" className=" py-3 px-6 bg-black text-primary font-semibold text-2xl border border-black w-fit active:scale-95 hover:bg-transparent hover:text-black transition-[background-color,color,transform] fade-animation" style={{ animationDelay: "2.9s", animationDuration: "0.2s" }}>Send</button>
        </form>
    )
}