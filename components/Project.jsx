import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        title: 'Ser Manos',
        description: 'Multiplatform mobile application built using Flutter and Firebase. The main idea behind the app is about users volunteering for different causes and also read news regarding subjects in relation with volunteering',
        link: 'https://github.com/navfran98/Multiplataforma_TP',
        image: "/assets/ser_manos.png",
        tags: ['Flutter', 'Dart', 'Firebase']
    },
    {
        title: 'Ser Manos',
        description: 'Multiplatform mobile application built using Flutter and Firebase. The main idea behind the app is about users volunteering for different causes and also read news regarding subjects in relation with volunteering',
        link: 'https://github.com/navfran98/Multiplataforma_TP',
        image: "/assets/ser_manos.png",
        tags: ['Flutter', 'Dart', 'Firebase']
    }
]

const Project = () => {
    return (
        <div className="mx-[20px] sm:mx-[60px] my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-1 gap-20 xl:gap-5">
            {projects.map((project, index) => {
                return <div key={index} className="flex flex-col xl:flex-row bg-opacity-50 rounded-lg overflow-hidden mb-4 items-start">
                        {/* Image */}
                            <div className="w-full h-[200px] xl:w-[200px] xl:h-[200px] relative flex-shrink-0">
                                <Image src={project.image} alt="" priority quality={100} fill className="object-fit"></Image>
                            </div>
                            {/* Info */}
                            <div className="p-4 flex flex-col justify-center">
                                <h2 className="h2">{project.title}</h2>
                                <p>{project.description}</p>
                            </div>
                        </div>
            })}
        </div>
    )
}

export default Project