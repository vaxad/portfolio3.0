import Loader from "@/components/Loader";

export default function Loading() {
    return (
        <div className="flex h-full flex-grow fixed top-0 z-50 right-0 w-full justify-center items-center bg-black">
            <Loader />
        </div>
    )
}
