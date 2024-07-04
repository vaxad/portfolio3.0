"use client"
import { pathAtom, showSliderAtom } from "@/state/jotai"
import { useAtom } from "jotai"
import { usePathname } from "next/navigation";
import { useEffect } from "react";
// import { useEffect } from "react";

export default function TransitionSlider() {
    const [showSlider, setShowSlider] = useAtom(showSliderAtom);
    const path = usePathname();
    const [targetPath] = useAtom(pathAtom);
    useEffect(() => {
        // console.log({ showSlider })
        if (showSlider && path === targetPath) {
            setTimeout(() => {
                setShowSlider(false)
            }, 1000);
        }
    }, [path])

    return (
        <div className={`${showSlider ? " " : " translate-x-full"} transition-[transform] delay-300 duration-700  flex fixed z-50 bg-black text-primary inset-0 justify-center items-center font-extrabold text-6xl`}>
            <div className="ldr-container">
                <div className="ldr-dot"></div>
                <div className="ldr-dot"></div>
                <div className="ldr-dot"></div>
            </div>
        </div>
    )
}
