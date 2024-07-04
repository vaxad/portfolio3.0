import { getAchievements } from "@/actions/actions"
import { Achievement } from "@/lib/types"
import FamGallery from "./(components)/FamGallery"

export default async function Page() {
    const resp: { achievements: Achievement[] } | null = await getAchievements()
    const data: Achievement[] | null = resp ? resp.achievements.sort((a, b) => (parseInt(b.order) - parseInt(a.order))) : null
    return (
        <div className=" flex flex-col py-24 ">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between px-6 md:px-16 lg:px-24 py-16 md:py-0">
                <h1 className=" text-5xl md:text-6xl font-medium underline decoration-secondary fade-animation up-animation" style={{ animationDelay: "2s", animationDuration: "0.3s" }}>Achievements</h1>
                {/* <div className="block w-2 h-2 rounded-full bg-black"></div> */}
                <i className=" text-2xl w-full md:w-1/2 text-center md:text-right fade-animation up-animation" style={{ animationDelay: "2.1s", animationDuration: "0.3s" }}>
                    &quot;Here are the milestones that marked my journey&quot;
                </i>
            </div>
            <div className="flex fade-animation up-animation" style={{ animationDelay: "2.4s", animationDuration: "1s" }}>
                {data ? <FamGallery data={data} /> : <></>}
            </div>
        </div>
    )
}
