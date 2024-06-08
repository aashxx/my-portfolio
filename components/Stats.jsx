"use client";

import CountUp from "react-countup";

const stats = [
    {
        num: 2,
        text: "Years of experience"
    },
    {
        num: 26,
        text: "Projects completed"
    },
    {
        num: 10,
        text: "Techs mastered"
    },
    {
        num: 18,
        text: "Code commits"
    },
]

const Stats = () => {
    return (
        <div className="flex flex-wrap gap-4 lg:gap-[unset] lg:justify-evenly items-center justify-center">
            {
                stats.map((item, index) => (
                    <div key={index} className="flex-1 lg:flex-initial flex gap-3 items-center lg:justify-start">
                        <CountUp end={item.num} duration={5} delay={2} className="text-4xl lg:text-6xl font-extrabold gradient-heading" />
                        <p className={`${item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'} leading-snug text-[gray] dark:text-white/80`}>
                            {item.text}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}

export default Stats;