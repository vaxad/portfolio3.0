
export default function Splash() {
    return (
        <div className="slide-right-animation flex fixed z-50 top-0 left-0 bg-black text-primary h-full w-full justify-center items-center font-extrabold text-6xl">
            <div className="flex flex-row">
                {"Hello there!".split("").map((char, idx) => {
                    const delay = idx * 0.1
                    return (
                        <span key={`char-${idx}`} className="fade-animation" style={{ animationDelay: `${delay}s` }}>{char === " " ? <>&nbsp;</> : char}</span>
                    )
                })}
            </div>
        </div>
    )
}
