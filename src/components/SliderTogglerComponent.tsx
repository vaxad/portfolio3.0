"use client"

import { showSliderAtom } from "@/state/jotai";
import { useAtom } from "jotai";
import { useEffect } from "react";

export default function SliderTogglerComponent() {
    const [showSlider, setShowSlider] = useAtom(showSliderAtom);
    useEffect(() => {
        setShowSlider(false);
    }, [])

    return (
        <></>
    )
}
