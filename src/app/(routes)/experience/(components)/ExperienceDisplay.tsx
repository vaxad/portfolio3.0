import { Experience } from '@/lib/types'
import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'

function ExperienceCard({ item, idx, total }: { item: Experience, idx: number, total: number }) {
    return (
        <div className=' flex md:flex-row flex-col group w-full relative overflow-hidden'>
            <img src={item.img} alt={item.company} className='  -z-10 absolute right-0 w-full aspect-auto blur-lg top-0 bottom-0 my-auto opacity-0 scale-100 group-hover:scale-125 group-hover:opacity-50 transition-[opacity,transform] duration-700' />
            <div className=' flex flex-col w-full md:w-1/2 py-6'>
                <div className=' w-full flex aspect-square overflow-hidden justify-center items-center md:border-r md:border-t-0 border-t border-r-0 border-tertiary'>
                    <div className='flex flex-col w-fit'>
                        <h1 className=' text-4xl font-semibold'>·{" " + item.company.split('·')[0].trim()}</h1>
                        <div className=' h-1 bg-black w-full flex flex-grow scale-x-0 group-hover:scale-x-100 origin-left transition-[transform] delay-150 duration-700'></div>
                    </div>
                </div>
            </div>
            <div className=' flex flex-col p-6 border-t border-tertiary w-full'>
                <div className=' flex items-center justify-between'>
                    <h1 className=' text-2xl font-medium'>{item.role}</h1>
                    <a href={item.url} target='_blank'>
                        <BsArrowUpRight className=' ' />
                    </a>
                </div>
                <h1 className=' text-lg font-light'>{item.location}</h1>
                <h1 className=' text-lg font-light'>{item.date}</h1>
                <p className=' text-lg font-light'>{item.skills.slice(0, 3).join(', ')}</p>
                <div className=' flex flex-grow items-end justify-between'>
                    <h1 className=' text-lg font-light text-tertiary'>/00-{idx < 10 ? ("0" + idx) : idx}</h1>
                    <h1 className=' text-lg font-light text-tertiary'>/00-{total < 10 ? ("0" + total) : total}</h1>
                </div>
            </div>
        </div>
    )
}
export default function ExperienceDisplay({ data }: { data: Experience[] }) {
    return (
        <div className=' py-24 flex flex-col px-6 md:px-16 lg:px-24 w-full fade-animation up-animation' style={{ animationDelay: "2.4s", animationDuration: "1s" }}>
            {data.map((item, idx) => <ExperienceCard key={`exp-${idx}`} item={item} idx={idx} total={data.length} />)}
        </div>
    )
}
