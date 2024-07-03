"use client"
import { showSliderAtom } from "@/state/jotai";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { HTMLAttributes } from "react";

export default function SliderTogglerBtn({ children, route, ...props }: HTMLAttributes<HTMLButtonElement> & { route: string, children: React.ReactNode }) {
    const [showSlider, setShowSlider] = useAtom(showSliderAtom);
    const router = useRouter()
    return (
        <button className=" outline-none" onClick={() => {
            setShowSlider(true);
            setTimeout(() => {
                router.push(route)
            }, 1000);
        }} {...props}>
            {children}
        </button>
    )
}
