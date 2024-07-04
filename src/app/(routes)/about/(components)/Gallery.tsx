"use client"

import { useEffect, useState } from "react"

export default function Gallery() {
    const imgs = ["img3", "img4", "img1", "img7", "img5"]
    const [currentImg, setCurrentImg] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            setCurrentImg((currentImg + 1) % imgs.length)
        }, 2500);
    }, [currentImg])

    return (
        <div className=" w-full flex flex-grow justify-center items-center  fade-animation up-animation" style={{ animationDelay: "2.5s", animationDuration: "1s" }}>
            <div className=" w-full aspect-[9/10] relative overflow-clip bg-black">
                {imgs.map((img, i) => (
                    <img key={`img-${i}`} className={` ${(i === currentImg) ? "cp1 scale-100" : `cp${2 + (i % 4)} scale-125`} transition-[clip-path,transform] bottom-0 top-0 duration-700 delay-200 w-full bnw object-contain absolute mx-auto my-auto`} src={`/images/self/${img}.jpg`} alt={img} />
                ))}
            </div>
        </div>
    )
}
