import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const courses = [
    {
        item: "1st Year",
        list: ["Imperative Programming"]
    },
    {
        item: "2nd Year",
        list: ["Computer's Arquitecture", "Object Oriented Programming (OOP)", "Databases I"]
    },
    {
        item: "3rd Year",
        list: ["Automatas, Languages Theory and Compilers", "Web Application Project", "Communication Protocols", "Human-Computer Interaction (HCI)", "Software Engineering I", "Operating Systems"]
    },
    {
        item: "4th Year",
        list: ["Cryptography and Security", "Artificial Intelligence Systems", "Systems Simulations", "Advance Numeric Methods", "Distributed Objects Programming", "Databases II"]
    },
    {
        item: "5th Year",
        list: ["Information Networks"]
    },
    {
        item: "Optionals",
        list: ["Introduction to Bioinformatics", "Virtual Reality", "Information Visualization (INFOVIS)", "Cloud Computing", "Cross-Platform Mobile Application Project", "Introduction to Videogames Programming", "Bid Data"]
    },

]

const Courses = () => {
    return (
        <Accordion type="multiple" collapsible className="w-full">
            {courses.map((course, index) => {
                return <AccordionItem key={index} value={course.item}>
                    <AccordionTrigger>{course.item}</AccordionTrigger>
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