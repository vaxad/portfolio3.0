import About from "@/components/About";
import Achievements from "@/components/Achievements";
import ContactMarquee from "@/components/ContactMarquee";
import Cursor from "@/components/Cursor";
import Experiences from "@/components/Experience";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import Separator from "@/components/Separator";
import Splash from "@/components/Splash";
import TopSection from "@/components/TopSection";
// import { ReactLenis } from 'lenis/react'

export default function Page() {
  return (
    <>
      {/* <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true, autoResize: false }}> */}
      <Cursor />
      <Splash />
      <TopSection />
      <Home />
      <Separator />
      <About />
      <Separator />
      <Projects />
      <Separator />
      <Experiences />
      <Separator />
      <Achievements />
      <ContactMarquee />
      {/* </ReactLenis> */}
    </>
  );
}
