
const EducationInfo = () => {
    return (
        <div className="flex flex-col">
            <span className="text-accent font-semibold text-lg my-3">Technology Analyst</span>
            <p>I am currently finishing my studies in Software Engineering at ITBA. I already finished all the courses and I'm missing a month of professional experience to receive my title. My interest are more on the side of back-end development, but I have experience building mobile applications using flutter.</p>

            <h3 className="h3 text-md mt-5">Instituto Tecnologico de Buenos Aires (ITBA): </h3>
            <ul className="list-disc mt-2">
                <li className="mx-5">Information Technology Analyst Associate's Degree</li>
                <li className="mx-5">Software Engineering Degree <span className=" text-sm text-white/60">(mid 2024)</span></li>
            </ul>
        </div>
    )
}

export default EducationInfo;