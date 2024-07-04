import SliderTogglerBtn from "./SliderTogglerBtn"

export default function ContactMarquee() {
    // const arr = ["Contact Me", "Contact Me", "Contact Me", "Contact Me", "Contact Me"]
    return (
        <div id="Contact" className=" overflow-x-clip">
            <SliderTogglerBtn route="/contact" className=" flex w-full outline-none">
                <div className=" flex marquee-animation-parent flex-row border-t-2 border-b-2 border-black hover:bg-black hover:text-primary ">
                    <div className="marquee-animation  flex flex-row flex-nowrap text-nowrap" style={{ animationDuration: "10s" }}>
                        {[...(Array(5))].map((item, idx) => {
                            return (
                                <div key={`contact-${idx}`} className=" py-4 px-6">
                                    <h1 className=" text-7xl font-bold">Contact Me</h1>
                                </div>
                            )
                        })}
                    </div>
                    <div className="marquee-animation  flex flex-row flex-nowrap text-nowrap" style={{ animationDuration: "10s" }}>

                        {[...(Array(5))].map((item, idx) => {
                            return (
                                <div key={`contact-${idx}`} className=" py-4 px-6">
                                    <h1 className=" text-7xl font-bold">Contact Me</h1>
                                </div>
                            )
                        })}
                    </div>
                    <div className="marquee-animation  flex flex-row flex-nowrap text-nowrap" style={{ animationDuration: "10s" }}>

                        {[...(Array(5))].map((item, idx) => {
                            return (
                                <div key={`contact-${idx}`} className=" py-4 px-6">
                                    <h1 className=" text-7xl font-bold">Contact Me</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </SliderTogglerBtn>
        </div>
    )
}
