"use client"
import { useState } from "react"
import { aboutPageText, resumeLink } from "@/lib/constants"

export default function AboutSection() {
    const icons = ["git", "bootstrap", "c", "androidstudio", "vite", "vercel", "netlify", "prisma", "supabase", "express", "figma", "firebase", "github", "html", "mongodb", "java", "ts", "postman", "js", "md", "mysql", "cpp", "css", "postgresql", "nextjs", "nodejs", "arduino", "py", "react", "redux", "tailwind", "ts", "vscode", "nestjs"] as const
    const keywords = ["Frontend", "Web", "Development", "mobile", "apps", "backend", "servers", "programming", "languages."] as const
    type Keyword = (typeof keywords)[number];
    type Icon = (typeof icons)[number];
    const [hoveredKeyword, setHoveredKeyword] = useState<Keyword | "">("")

    const KeyToIcon: Record<Keyword | "", Icon[]> = {
        "": [],
        "Frontend": ["bootstrap", "react", "redux", "tailwind", "css", "js", "ts", "html", "nextjs", "vite", "vercel", "netlify", "prisma", "figma",],
        "Web": ["bootstrap", "react", "redux", "tailwind", "css", "js", "ts", "html", "nextjs", "vite", "vercel", "netlify", "prisma", "figma",],
        "Development": ["bootstrap", "react", "redux", "tailwind", "ts", "css", "js", "html", "nextjs", "vite", "vercel", "netlify", "prisma", "figma"],
        "mobile": ["androidstudio", "java", "js", "css", "ts", "figma", "firebase"],
        "apps": ["androidstudio", "java", "js", "css", "ts", "figma", "firebase"],
        "backend": ["nodejs", "js", "java", "nestjs", "ts", "nextjs", "c", "mysql", "prisma", "postgresql", "py", "supabase", "postman", "mongodb", "express", "supabase"],
        "servers": ["nodejs", "js", "java", "nestjs", "ts", "nextjs", "c", "mysql", "prisma", "postgresql", "py", "supabase", "postman", "mongodb", "express", "supabase"],
        "programming": ["c", "arduino", "cpp", "git", "js", "mysql", "py", "ts", "html", "md"],
        "languages.": ["c", "arduino", "cpp", "git", "js", "mysql", "py", "ts", "html", "md"],
    }
    return (
        <div className=" flex flex-col w-full py-6 border-t border-tertiary overflow-x-hidden ">
            {aboutPageText.split("\n").map((text, idx) => (
                <p onMouseLeave={() => {
                    if (window.innerWidth < 700) return;
                    setHoveredKeyword("")
                }} key={`para-${idx}`} className=" text-xl font-medium flex flex-row flex-wrap px-6 md:px-0">
                    {text.split(" ").map((it, id) => {
                        return (it === "Varad") ? (
                            <span key={`word-${id}`} className="" title="Get Resume">
                                <a href={resumeLink} target="_blank" className="text-secondary cursor-pointer underline bg-llime-300">
                                    {it}
                                </a>
                                &nbsp;
                            </span>
                        ) : (
                            <span onMouseEnter={() => { setHoveredKeyword(keywords.includes(it as Keyword) ? (it as Keyword) : "") }} key={`word-${id}`} className={`text-nowrap ${keywords.includes(it as Keyword) ? "text-secondary cursor-pointer" : "bnw"}`}>
                                {it}&nbsp;
                            </span>
                        )
                    })} <span><br /></span>
                </p>
            ))}
            <div className=" flex flex-grow justify-end pt-6 flex-col w-max  gap-6">
                <div className="flex flex-nowrap marquee-animation-parent justify-end">
                    <div className="reverse-marquee-animation w-max flex flex-row-reverse justify-end flex-nowrap text-nowrap">
                        {icons.map((icon, idx) => (
                            <img key={idx} className={` ${KeyToIcon[hoveredKeyword].includes(icon) ? "" : "bnw scale-75"} px-2 transition-[filter,-webkit-filter,transform] duration-700 delay-150  `} src={`https://skillicons.dev/icons?i=${icon}&perline=1`} />
                        ))}
                    </div>
                    <div className="reverse-marquee-animation w-max flex flex-row-reverse justify-end flex-nowrap text-nowrap">
                        {icons.map((icon, idx) => (
                            <img key={idx} className={` ${KeyToIcon[hoveredKeyword].includes(icon) ? "" : "bnw scale-75"} px-2 transition-[filter,-webkit-filter] duration-700 delay-150 `} src={`https://skillicons.dev/icons?i=${icon}&perline=1`} />
                        ))}
                    </div>
                </div>
                <div className="flex flex-nowrap marquee-animation-parent">
                    <div className="marquee-animation w-max flex flex-row flex-nowrap text-nowrap">
                        {icons.map((icon, idx) => (
                            <img key={idx} className={` ${KeyToIcon[hoveredKeyword].includes(icon) ? "" : "bnw scale-75"} px-2 transition-[filter,-webkit-filter] duration-700 delay-150 `} src={`https://skillicons.dev/icons?i=${icon}&perline=1`} />
                        ))}
                    </div>
                    <div className="marquee-animation w-max flex flex-row flex-nowrap text-nowrap">
                        {icons.map((icon, idx) => (
                            <img key={idx} className={` ${KeyToIcon[hoveredKeyword].includes(icon) ? "" : "bnw scale-75"} px-2 transition-[filter,-webkit-filter] duration-700 delay-150 `} src={`https://skillicons.dev/icons?i=${icon}&perline=1`} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}
