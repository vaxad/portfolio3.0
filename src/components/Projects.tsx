import { getProjects } from "@/actions/actions"
import { ProjectData } from "@/lib/types"
import ProjectsDisplay from "./ProjectsDisplay"
// import { LuArrowUpRight } from "react-icons/lu"
export default async function Projects() {
    const resp: ProjectData | null = await getProjects()
    const data: ProjectData | null = resp ? { web: resp.web.sort((a, b) => (parseInt(b.id) - parseInt(a.id))), server: resp.server.sort((a, b) => (parseInt(b.id) - parseInt(a.id))), app: resp.app.sort((a, b) => (parseInt(b.id) - parseInt(a.id))) } : null
    return data ? (
        <div id="Projects" className=" px-4 md:px-24 py-8 gap-4 flex flex-col w-full overflow-x-clip ">
            <ProjectsDisplay data={data} />
        </div>
    ) : (
        <></>
    )
}
