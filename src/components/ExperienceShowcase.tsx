import { Experience } from "@/lib/types";
import ClientStlye from "./ClientStlye";

function ExperienceCard({ item, idx }: { item: Experience, idx: number }) {
    return (
        <div className=" curved-card flex-1 w-[300px] transition-[transform] aspect-square bg-cover bg-no-repeat" style={{
            backgroundImage: `url(${item.img})`,
        }}>
            <div className=" relative w-full h-full flex-grow bg-[rgba(0,0,0,0.5)] flex flex-col text-primary p-4">
                <h1 className="underline decoration-secondary text-2xl font-semibold">{item.company}</h1>
                <h1 className=" font-medium text-lg">{item.role}</h1>
                <h1 className=" pt-4 text-sm font-light">{item.location}</h1>
                <p className=" pt-1 text-sm font-light">{item.skills.slice(0, 3).join(", ")}</p>
            </div>
        </div>
    )
}

export default function ExperienceShowcase({ data }: { data: Experience[] }) {
    const list = [...data, ...data, ...data].slice(0, 18);
    return (
        <div className=" marquee-animation-parent1 curved-section overflow-x-clip">
            <div className="flex marquee-animation1 curved-card-container top-[200px] bg-red-500 h-[400px]">
                {list.map((item, idx) => <ExperienceCard key={`exp-${idx}`} item={item} idx={idx} />)}
            </div>
            <ClientStlye styling={
                `${list.map((item, idx) => `
                .curved-card-container>div:nth-child(${idx + 1}) {
                    transform: rotateY(calc(${idx + 1} * 20deg)) translateZ(-1200px);
                }
                `).join("\n")}`} />
        </div>
    )
}
