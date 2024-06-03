import Link from "next/link";
import { FaLinkedinIn, FaGithub} from "react-icons/fa"

const socials = [
    { icon: <FaGithub className="text-xl"/>, path: 'https://github.com/navfran98'},
    { icon: <FaLinkedinIn className="text-xl"/>, path: 'https://www.linkedin.com/in/franco-navarro-196b5b195/'},
]

const Social = ({containerStyles, iconStyles}) => {
    return (<div className={containerStyles}>
        {socials.map((item, index) => {
            return (<Link target="_blank" key={index} href={item.path} className={iconStyles}>{item.icon}</Link>)
        })}
    </div>)
}

export default Social;