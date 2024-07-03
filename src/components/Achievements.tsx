import { getAchievements } from "@/actions/actions"
import { Achievement } from "@/lib/types"
import AchievementDisplay from "./AchievementDisplay"

export default async function Achievements() {
    const resp: { achievements: Achievement[] } | null = await getAchievements()
    const data: Achievement[] | null = resp ? resp.achievements.sort((a, b) => (parseInt(b.order) - parseInt(a.order))) : null
    return data ? (
        <div id="Achievements" className=" px-4 md:px-24 py-8 gap-4 flex flex-col w-full overflow-x-clip">
            <AchievementDisplay data={data} />
        </div>
    ) : (
        <></>
    )
}
