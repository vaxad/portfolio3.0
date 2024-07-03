"use client"

import { showSliderAtom } from "@/state/jotai";
import { useAtom } from "jotai";
import { useEffect } from "react";

export default function useSlider(value?: boolean) {
    const [showSlider, setShowSlider] = useAtom(showSliderAtom);
    useEffect(() => {
        setShowSlider(value ? value : false)
    }, [])
    return { showSlider, setShowSlider }
}