import { getAchievements } from "@/actions/actions"
import { Achievement } from "@/lib/types"
import AchievementDisplay from "./AchievementDisplay"
import SliderTogglerBtn from "./SliderTogglerBtn"
import { BsArrowUpRight } from "react-icons/bs"

export default async function Achievements() {
    const resp: { achievements: Achievement[] } | null = await getAchievements()
    const data: Achievement[] | null = resp ? resp.achievements.sort((a, b) => (parseInt(b.order) - parseInt(a.order))) : null
    return data ? (
        <div id="Achievements" className=" px-4 md:px-24 py-8 gap-4 flex flex-col w-full overflow-x-clip">
            <div className=" flex flex-col md:flex-row gap-4 w-full h-fit group">
                <div className=" flex flex-col gap-4 w-full md:text-right">
                    <SliderTogglerBtn title="See More" route="/achievements" className="slide-up-animation">
                        <div className=" flex flex-col gap-0.5 w-fit cursor-pointer ">
                            <div className=" flex gap-2 items-center">
                                <h1 className=" text-4xl font-medium ">
                                    Achievements
                                </h1>
                                <BsArrowUpRight className=" w-6 h-6" />
                            </div>
                            <div className=" h-0.5 w-full bg-black scale-x-0 group-hover:scale-x-100 transition-[transform] origin-left duration-500 delay-100"></div>
                        </div>
                    </SliderTogglerBtn>
                    <i className=" text-xl">
                        &quot;Where my hard work paid off big time&quot;
                    </i>
                </div>
            </div>
            <AchievementDisplay data={data} />
        </div>
    ) : (
        <></>
    )
}
