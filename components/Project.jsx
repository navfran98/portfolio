import Link from "next/link";
import Image from "next/image";
import Tags from "./Tags";

const projects = [
    {
        title: 'Ser Manos',
        description: 'Multiplatform mobile application built using Flutter and Firebase. The main idea behind the app is about users volunteering for different causes and also read news regarding subjects in relation with volunteering',
        link: 'https://github.com/navfran98/Multiplataforma_TP',
        image: "/assets/ser_manos.png",
        isGithub: true,
        tags: ['Flutter', 'Dart', 'Firebase']
    },
    {
        title: 'Steganography',
        description: 'Program that implements the cryptographic idea of "share secret" between .bmp images. It hide an image inside other and also bring back and image from other images.',
        link: 'https://github.com/navfran98/esteganografia',
        image: "/assets/steganography.jpg",
        isGithub: true,
        tags: ['C', 'Makefile']
    },
    {
        title: 'AI Projects',
        description: 'Three AI projects: A search method for the game Fillzone; a genetic algorithm that represents an image with a map of ASCII character; a simple multilayer perceptron algorithm which is train with different situations and then test its learning.',
        link: 'https://github.com/navfran98?tab=repositories&q=sia',
        image: "/assets/ai.png",
        isGithub: true,
        tags: ["Python", "Jupyter Notebook"]
    },
    {
        title: 'Distributed Systems Projects',
        description: 'Two DS projects: A remote thread-safe system to manage airplane seats while offering reports; a console app that implements the MapReduce model from HazelCast to process data coming from pedestrian sensors.',
        link: 'https://github.com/navfran98?tab=repositories&q=pd',
        image: "/assets/ds.png",
        isGithub: true,
        tags: ['Java', 'Bash', 'Maven', 'HazelCast']
    },
    {
        title: 'Globepackers',
        description: 'Webapp that connects people that want to travel in a cheap way, and people who offer their acomodations in exchange for some help or work they need.',
        link: 'https://github.com/navfran98/esteganografia',
        image: "/assets/steganography.jpg",
        isGithub: false,
        tags: ['Java', 'Maven', 'Spring', 'Hibernate', 'PostgreSQL', 'Vue.js', 'Javascript']
    }
]

const Project = () => {
    return (
        <div className="flex flex-col mx-[20px] my-[20px] gap-8 justify-star">
            {projects.map((project, index) => {
                return <div key={index} className="flex flex-col xl:flex-row rounded-lg overflow-hidden mb-4 bg-seconday">
                        {/* Image */}
                            <div className="relative flex-shrink-0 hidden xl:flex w-[220px] h-auto">
                                <Image src={project.image} alt="" priority quality={100} fill className="object-fit"></Image>
                            </div>
                            {/* Info */}
                            <div className="p-4 flex flex-col justify-center">
                                <h2 className="h2">{project.title}</h2>
                                <p className="mt-2">{project.description}</p>
                                <Tags tags={project.tags} isGithub={project.isGithub} link={project.link}/>
                            </div>
                        </div>
            })}
        </div>
    )
}

export default Project

// return (
//     <div className="mx-[20px] sm:mx-[60px] my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-1 gap-20 xl:gap-5">
//         {projects.map((project, index) => {
//             return <div key={index} className="flex flex-col xl:flex-row bg-opacity-50 rounded-lg overflow-hidden mb-4 items-start">
//                     {/* Image */}
//                         <div className="w-full h-[200px] xl:w-[200px] xl:h-[200px] relative flex-shrink-0">
//                             <Image src={project.image} alt="" priority quality={100} fill className="object-fit"></Image>
//                         </div>
//                         {/* Info */}
//                         <div className="p-4 flex flex-col justify-center">
//                             <h2 className="h2">{project.title}</h2>
//                             <p>{project.description}</p>
//                         </div>
//                     </div>
//         })}
//     </div>
// )