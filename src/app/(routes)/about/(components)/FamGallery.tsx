

export default function FamGallery() {
    const imgs = ["img1", "img2", "img3", "img4", "img5", "img7", "img8", "img9"]
    return (

        <div className=" flex flex-grow justify-end pt-6 flex-col w-max gap-6 overflow-x-hidden">
            <div className="flex flex-nowrap marquee-animation-parent justify-end">
                <div className="marquee-animation w-max flex flex-row justify-end flex-nowrap text-nowrap">
                    {imgs.map((img, i) => (
                        <div key={`img-${i}`} className=" w-[400px] aspect-square relative overflow-clip mx-4">
                            <img className={` bnw hover:filter-none transition-[filter] delay-0 duration-500 absolute top-0 bottom-0 my-auto mx-auto `} src={`/images/fam/${img}.jpg`} alt={img} />
                        </div>
                    ))}
                </div>
                <div className="marquee-animation w-max flex flex-row justify-end flex-nowrap text-nowrap">
                    {imgs.map((img, i) => (
                        <div key={`img-${i}`} className=" w-[400px] aspect-video relative rounded-lg overflow-clip mx-4">
                            <img className={`bnw hover:filter-none transition-[filter] delay-0 duration-500 absolute top-0 bottom-0 my-auto mx-auto`} src={`/images/fam/${img}.jpg`} alt={img} />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
