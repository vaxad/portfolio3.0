import Link from 'next/link'
import { TbFaceIdError } from 'react-icons/tb'

export default function Page() {
    return (
        <div>
            <div className="flex flex-col flex-grow min-h-[90vh] w-full justify-center items-center px-6 md:px-16 lg:px-24 py-24">
                <TbFaceIdError className="w-24 h-24" />
                <h1 className=" text-4xl font-semibold pt-8 pb-4 text-center">I think you may have been misguided my friend!</h1>
                <Link href={"/"} className=" py-3 px-8 bg-black text-primary text-2xl font-medium hover:bg-transparent border border-black hover:text-black transition-[background-color,color]">Return Home</Link>
            </div>
        </div>
    )
}
