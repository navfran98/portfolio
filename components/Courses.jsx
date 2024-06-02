import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { 
    TbHexagonNumber1,
    TbHexagonNumber2,
    TbHexagonNumber3,
    TbHexagonNumber4,
    TbHexagonNumber5,
    TbHttpOptions
} from "react-icons/tb";

const courses = [
    {
        item: "1st Year",
        icon: <TbHexagonNumber1 />,
        list: ["Imperative Programming"]
    },
    {
        item: "2nd Year",
        icon: <TbHexagonNumber2 />,
        list: ["Computer's Arquitecture", "Object Oriented Programming (OOP)", "Databases I"]
    },
    {
        item: "3rd Year",
        icon: <TbHexagonNumber3 />,
        list: ["Automatas, Languages Theory and Compilers", "Web Application Project", "Communication Protocols", "Human-Computer Interaction (HCI)", "Software Engineering I", "Operating Systems"]
    },
    {
        item: "4th Year",
        icon: <TbHexagonNumber4 />,
        list: ["Cryptography and Security", "Artificial Intelligence Systems", "Systems Simulations", "Advance Numeric Methods", "Distributed Objects Programming", "Databases II"]
    },
    {
        item: "5th Year",
        icon: <TbHexagonNumber5 />,
        list: ["Information Networks"]
    },
    {
        item: "Optionals",
        icon: <TbHttpOptions />,
        list: ["Introduction to Bioinformatics", "Virtual Reality", "Information Visualization (INFOVIS)", "Cloud Computing", "Cross-Platform Mobile Application Project", "Introduction to Videogames Programming", "Bid Data"]
    },

]

const Courses = () => {
    return (
        <Accordion type="multiple" collapsible className="w-full">
            {courses.map((course, index) => {
                return <AccordionItem key={index} value={course.item}>
                    <AccordionTrigger><div className="flex gap-3 items-center justify-center ">{course.icon} {course.item}</div></AccordionTrigger>
                    <AccordionContent>
                        <ul className="list-disc">
                            {course.list.map((subject, index)=>{
                                return <li key={index}>{subject}</li>
                            })}
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            })}
        </Accordion>
    )
}

export default Courses