const info = [
    {
        field: 'Name',
        value: 'Franco Navarro'
    },
    {
        field: 'Email',
        value: 'franco.nava@outlook.es'
    },
    {
        field: 'Age',
        value: '25'
    },
    {
        field: 'Nationality',
        value: 'Argentinian'
    },
    {
        field: 'Languages',
        value: 'Spanish, English'
    }
]


const PersonalInfo = () => {
    return (
        <ul className="flex flex-col mt-5 gap-y-3">
            {info.map((info, index) => {
                return (
                    <li key={index} className="flex items-center justify-start gap-4">
                        <span className="text-white/60">{info.field}</span>
                        <span className="text-xl">{info.value}</span>
                    </li>
                )
            })}
        </ul>
    )
}

export default PersonalInfo;