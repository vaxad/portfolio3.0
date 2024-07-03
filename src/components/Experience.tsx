import { getExperiences } from "@/actions/actions"
import { Experience } from "@/lib/types"
import ExperienceDisplay from "./ExperienceDisplay"

export default async function Experiences() {
    const resp: { experiences: Experience[] } | null = await getExperiences()
    const data: Experience[] | null = resp ? resp.experiences.sort((a, b) => (parseInt(b.order) - parseInt(a.order))) : null
    return data ? (
        <div id="Experience" className=" px-4 py-8 gap-4 flex flex-col w-full overflow-x-clip  ">
            <ExperienceDisplay data={data} />
        </div>
    ) : (
        <></>
    )
}
