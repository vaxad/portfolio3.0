"use client"
import { TbFaceIdError } from "react-icons/tb";
export default function Error({
    error,
    reset,
}: { error: { digest?: string }, reset: () => void }) {
    return (
        <div className="flex flex-col flex-grow min-h-[90vh] w-full justify-center items-center px-6 md:px-16 lg:px-24 py-24">
            <TbFaceIdError className="w-24 h-24" />
            <h1 className=" text-4xl font-semibold pt-8 pb-4 text-center">Something went wrong!</h1>
            <button onClick={reset} className=" py-3 px-8 bg-black text-primary text-2xl font-medium hover:bg-transparent border border-black hover:text-black transition-[background-color,color]">Try again</button>
        </div>
    )
}
