"use client"
import { pathAtom, showSliderAtom } from "@/state/jotai";
import { useAtom } from "jotai";
import { usePathname, useRouter } from "next/navigation";
import { HTMLAttributes } from "react";

export default function SliderTogglerBtn({ children, route, ...props }: HTMLAttributes<HTMLButtonElement> & { route: string, children: React.ReactNode }) {
    const [, setShowSlider] = useAtom(showSliderAtom);
    const [, setPath] = useAtom(pathAtom);
    const path = usePathname();
    const router = useRouter()
    return (
        <button className=" outline-none" onClick={() => {
            setShowSlider(true);
            setTimeout(() => {
                if (path === route) return setShowSlider(false)
                router.push(route)
                setPath(route)
            }, 1000);
        }} {...props}>
            {children}
        </button>
    )
}
