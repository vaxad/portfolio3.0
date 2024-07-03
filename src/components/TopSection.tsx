import React from 'react'
import Navbar from './Navbar'

export default function TopSection() {
    return (
        <div className=" flex flex-row justify-between items-center py-4 px-6 bg-primary static md:sticky top-0 z-40 border-b border-black">
            <h1 className=" text-cl font-extrabold">
                vaxad
            </h1>
            <Navbar />
        </div>
    )
}
