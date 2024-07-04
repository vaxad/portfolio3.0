import React from 'react'
import Contact from './(components)/Contact'
import { LuGithub, LuLinkedin, LuNewspaper, LuTwitter } from 'react-icons/lu'
import { resumeLink } from '@/lib/constants'

export default function Page() {
    return (
        <div className=' flex flex-col px-6 md:px-16 lg:px-24 py-12'>
            <div className='flex md:flex-row flex-col justify-between items-center'>
                <div className="flex flex-row gap-4 w-full justify-start items-center ">
                    <a href="https://x.com/vaxaddev" target="_blank" className=" fade-animation" style={{ animationDelay: "2100ms" }}>
                        <LuTwitter className="w-10 h-10" />
                    </a>
                    <a href="https://github.com/vaxad" target="_blank" className=" fade-animation" style={{ animationDelay: "2200ms" }}>
                        <LuGithub className="w-10 h-10" />
                    </a>
                    <a href="https://www.linkedin.com/in/varadprabhu" target="_blank" className=" fade-animation" style={{ animationDelay: "2300ms" }}>
                        <LuLinkedin className="w-10 h-10" />
                    </a>
                    <a href={resumeLink} target="_blank" className=" fade-animation" style={{ animationDelay: "2400ms" }}>
                        <LuNewspaper className="w-10 h-10" />
                    </a>
                </div>
                <h1 className='text-6xl font-medium w-full text-left md:text-right fade-animation up-animation' style={{ animationDelay: "2s", animationDuration: "0.3s" }}>Contact</h1>
            </div>
            <div className=' h-1 bg-secondary flex w-full'></div>
            <Contact />
        </div>
    )
}
