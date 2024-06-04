import PersonalInfo from "@/components/PersonalInfo"
import EducationInfo from "@/components/EducationInfo";
import Image from 'next/image';
import Photo from "@/components/Photo";


const About = () => {
    return (
        <section className="h-full m-10">
            <div >
                <div className="flex flex-col md:flex-row items-center justify-center gap">
                    <div className="place-self-center">
                        <Photo />
                    </div> 
                    <div className="mx-10 mt-14 lg:mx-20 p-10 rounded-xl bg-seconday sm:place-self-center">
                        <h2 className="h2 text-3xl">Aboute me</h2>
                        <PersonalInfo />
                    </div> 
                </div>   
                <div className="mx-10 mt-14 lg:mx-20 px-7 py-7 rounded-xl bg-seconday">
                    <h2 className="h2 text-3xl">Education</h2>
                    <EducationInfo />
                </div>
            </div>
        </section>
    )
}

export default About;