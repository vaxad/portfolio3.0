import { ProjectData } from "@/lib/types"
import ProjectsDisplay from "./(components)/ProjectsDisplay"
import { getProjects } from "@/actions/actions"
export default async function Page() {
    const resp: ProjectData | null = await getProjects()
    const data: ProjectData | null = resp ? { web: resp.web.sort((a, b) => (parseInt(b.id) - parseInt(a.id))), server: resp.server.sort((a, b) => (parseInt(b.id) - parseInt(a.id))), app: resp.app.sort((a, b) => (parseInt(b.id) - parseInt(a.id))) } : null

    return (
        <div className=" flex flex-col flex-grow ">
            <div className="flex flex-col md:flex-row py-32 px-6 md:px-12 lg:px-24 justify-center items-center gap-8 min-h-[80vh] ">
                <h1 className=" text-8xl md:text-9xl font-medium w-full text-center underline decoration-lime-300">Projects</h1>
                <i className=" text-2xl w-full text-center md:text-left">
                    &quot;Step into my lab and explore the creations where code meets imagination.&quot;
                </i>
            </div>
            {data ?
                <ProjectsDisplay data={data} />
                :
                <></>
            }
        </div>
    )
}
