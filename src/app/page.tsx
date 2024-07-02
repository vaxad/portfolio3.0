import About from "@/components/About";
import Cursor from "@/components/Cursor";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import Separator from "@/components/Separator";
import Splash from "@/components/Splash";
// import { ReactLenis } from 'lenis/react'

export default function Page() {
  return (
    <>
      {/* <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true, autoResize: false }}> */}
      <Cursor />
      <Splash />
      <Home />
      <Separator />
      <About />
      <Separator />
      <Projects />
      {/* </ReactLenis> */}
    </>
  );
}
