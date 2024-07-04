import About from "@/components/About";
import Achievements from "@/components/Achievements";
import ContactMarquee from "@/components/ContactMarquee";
import Experiences from "@/components/Experience";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import Separator from "@/components/Separator";
import Splash from "@/components/Splash";

export default function Page() {
  return (
    <>
      <Splash />
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
    </>
  );
}
