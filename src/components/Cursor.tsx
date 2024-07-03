"use client"
import { useLenis } from "lenis/react";
import { useEffect, useRef, useState } from "react"

export default function Cursor() {
    const lenis = useLenis()
    const [mouseX, setMouseX] = useState(-200)
    const [mouseY, setMouseY] = useState(-200)
    const [scrollY, setScrollY] = useState(0)

    const mouseXRef = useRef(mouseX)
    const mouseYRef = useRef(mouseY)
    const scrollYRef = useRef(scrollY)

    const moveCursor = (e: MouseEvent) => {
        // console.log({ e })
        setMouseY(scrollYRef.current + e.clientY);
        setMouseX(e.clientX);
        mouseXRef.current = e.clientX
        mouseYRef.current = e.clientY
    }

    useEffect(() => {
        if (typeof window === 'undefined') return;

        window.addEventListener('mousemove', moveCursor)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
        }
    }, [])

    useEffect(() => {
        if (typeof window === 'undefined' || !lenis) return;

        lenis.on('scroll', () => {
            setMouseY(mouseYRef.current + window.scrollY)
            setScrollY(window.scrollY)
            scrollYRef.current = window.scrollY
        })
    }, [lenis])


    return (
        <>
            <div className="z-50 hidden lg:block absolute w-10 h-10 rounded-full border border-black bg-primary mix-blend-difference transition-[transform] duration-75 delay-0 ease-out" style={{ transform: `translate3d(${mouseX}px, ${mouseY}px, 0)` }}></div>
        </>
    )
}
