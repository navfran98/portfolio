import Link from "next/link";
import { FaLinkedin, FaGithub} from "react-icons/fa"

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/navfran98'},
    { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/franco-navarro-196b5b195/'},
]

const Social = ({containerStyles, iconStyles}) => {
    return (<div className={containerStyles}>
        {socials.map((item, index) => {
            return (<Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>)
        })}
    </div>)
}

export default Social;