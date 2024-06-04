import { 
    FaJava,
    FaPython,
    FaHtml5,
    FaVuejs,
    FaReact
} from "react-icons/fa";

import { 
    SiDart,
    SiFlutter,
    SiPostgresql,
} from "react-icons/si";

import { TbLetterC } from "react-icons/tb";


const skills = [
    {
        skill: "Java",
        icon: <FaJava  className="text-3xl"/>,
        description: "In college they taught Object Oriented Programming using Java. I used it as the main language for back-end in almost every project during my studies.",
    },
    {
        skill: "Dart",
        icon: <SiDart className="text-3xl"/>,
        description: "Used it on my flutter projects as the base programming language to build the apps.",
    },
    {
        skill: "Flutter",
        icon: <SiFlutter className="text-3xl"/>,
        description: "I built two Flutter applications as I was looking to create a cross-platform mobile app. For these projects I implemented Beamer for navigation and Riverpod for state management.",
    },
    {
        skill: "C Language",
        icon: <TbLetterC className="text-3xl"/>,
        description: "I started my journey as a developer with C building projects in the areas of computers arquitecture, OS, information network and communication protocols. ",
    },
    {
        skill: "Python",
        icon: <FaPython className="text-3xl"/>,
        description: "I used python as my main tool for data analysis and also to build back-end code for my AI projects.",
    },
    {
        skill: "HTML & CSS",
        icon: <FaHtml5 className="text-3xl"/>,
        description: "I used html and css for my web projects to build the front-end.",
    },
    {
        skill: "PostgreSQL",
        icon: <SiPostgresql className="text-3xl"/>,
        description: "I hava experience using SQL databases, and Postgres has been my option for almost every project I built during my studies.",
    },
    {
        skill: "Vue.js",
        icon: <FaVuejs className="text-3xl"/>,
        description: "I use Vue to build the front-end for my main web application project, which was connnected to a REST API built using java and spring."
    },
    {
        skill: "React.js",
        icon: <FaReact className="text-3xl"/>,
        description: "I build this portfolio using React with Next.js framework and Tailwind to design it."
    },

]

const SkillGrid = () => {
    return (
        <div className="grid grid-flow-rows grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-8 mx-10 sm:mx-20 xl:mx-30 my-10">
            {skills.map((skill, index) => {
                return (
                    <div key={index} className="border rounded-2xl border-accent px-2 py-5">
                        <div className="flex gap-3 text-xl text-accent items-center justify-center">
                            {skill.icon}
                            {skill.skill}
                        </div>
                        <p className="text-center pt-3">{skill.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default SkillGrid