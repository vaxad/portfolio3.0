import { ProjectData, ServerProject } from "@/lib/types";
import { BsArrowUpRight } from "react-icons/bs";

function ProjectCard({ item, idx, total }: { item: ServerProject & { type: string }, idx: number, total: number }) {
    return (
        <div className=" flex flex-col-reverse lg:flex-row gap-0 group">
            <div className="flex w-full aspect-video relative bg-black overflow-clip">
                <img src={item.type === "server" ? idx % 2 === 0 ? "/images/server1.png" : "/images/server2.png" : item.img[0]} alt={item.title} className=" w-full h-full group-hover:scale-125 transition-[transform] delay-0 duration-700  object-cover blur-sm opacity-50 absolute top-0 bottom-0 my-auto mx-auto" />
                {item.type === "app" ?
                    <div className=" flex flex-row justify-between items-center w-[80%] absolute top-0 bottom-0 left-0 right-0 my-auto mx-auto">
                        <img src={item.img[0]} className=" h-[80%]" alt="" />
                        {item.img.length > 1 && <img src={item.img[1]} className=" h-[80%]" alt="" />}
                        {item.img.length > 2 && <img src={item.img[2]} className=" h-[80%]" alt="" />}
                    </div>
                    :
                    <img src={item.type === "server" ? idx % 2 === 1 ? "/images/server1.png" : "/images/server2.png" : item.img[0]} alt={item.title} className={`w-4/5 border  transition-[transform] delay-200 duration-500 ${item.type === "server" ? "border-transparent" : "border-white"} absolute top-0 bottom-0 left-0 right-0 my-auto mx-auto`} />
                }
            </div>
            <div className=" flex w-full flex-col p-6 border-t border-tertiary relative overflow-clip ">
                <div className=" flex w-full flex-col p-8 absolute top-0 right-0 h-full bg-black text-primary translate-y-full group-hover:translate-y-0 lg:translate-y-0 lg:-translate-x-full lg:group-hover:translate-x-0 duration-700 origin-left transition-[transform] ">
                    <div className=" flex flex-row w-full justify-between items-center">
                        <div className=" flex flex-col gap-0.5 w-fit">
                            <h1 className=" text-4xl font-medium">{item.title}</h1>
                            <div className=" h-0.5 w-full bg-primary scale-x-0 group-hover:scale-x-100 origin-left delay-700 duration-300"></div>
                        </div>
                        <a href={item.url}>
                            <BsArrowUpRight className=" w-10 h-10" />
                        </a>
                    </div>
                    <p className=" text-xl  w-2/3 py-4">{item.desc}</p>
                </div>
                <div className=" flex flex-row w-full justify-between items-center">
                    <h1 className=" text-4xl font-medium">{item.title}</h1>
                    <a href={item.url}>
                        <BsArrowUpRight className=" w-10 h-10" />
                    </a>
                </div>
                <p className=" text-xl  w-2/3 py-4">{item.desc}</p>
                <div className=" flex flex-grow w-full items-end justify-between">
                    <h4 className=" text-2xl text-tertiary">/00-{(idx + 1) < 10 ? "0" + (idx + 1) : (idx + 1)}</h4>
                    <h4 className=" text-2xl text-tertiary">/00-{total}</h4>
                </div>
            </div>
        </div>
    )
}

export default function ProjectsDisplay({ data }: { data: ProjectData }) {
    type ProjectType = "web" | "server" | "app"
    const projects: (ServerProject & { type: string })[] = Object.keys(data).map((key) => data[key as ProjectType].map((item) => ({ ...item, type: key })).flat()).flat(2)
    function rearrangeArray(arr: (ServerProject & { type: string })[]) {
        const groups = arr.reduce((acc, obj) => {
            if (!acc[obj.type]) {
                acc[obj.type] = [];
            }
            acc[obj.type].push(obj);
            return acc;
        }, {} as { [key: string]: (ServerProject & { type: string })[] });

        const maxLength = Math.max(...Object.values(groups).map(group => group.length));

        const result = [];
        for (let i = 0; i < maxLength; i++) {
            for (let type in groups) {
                if (groups[type][i]) {
                    result.push(groups[type][i]);
                }
            }
        }
        return result;
    }
    const rearrangedProjects = rearrangeArray(projects)
    return (
        <div className=" flex flex-col gap-6 pb-24 fade-animation up-animation" style={{ animationDelay: "2.4s", animationDuration: "1s" }}>
            {rearrangedProjects.map((item, idx) => <ProjectCard item={item} key={item._id} idx={idx} total={rearrangedProjects.length} />)}
        </div>
    )
}
