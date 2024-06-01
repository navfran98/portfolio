import {Button} from "@/components/ui/button";
import { FaGithub, FaBitbucket} from "react-icons/fa";
import Link from "next/link";

const Tags = ({tags, isGithub, link}) => {
    const buttonMsg = (isGithub ? "View on Github" : "View on Bitbucket");
    return (
        <div className='flex flex-wrap mt-5 gap-5 justify-between'>
            <div className="flex flex-wrap gap-4 items-end">
                {tags.map((tag, index) => {
                    return <p key={index} className='rounded-md border border-accent bg-transparent text-accent px-3'>{tag}</p>
                })}
            </div>
            <Button variant="outline" size="md">
                <Link target="_blank" href={link} className="uppercase flex flex-row items-center gap-2  px-5 py-2"> <span>{buttonMsg}</span>
                {isGithub === true ? <FaGithub /> : <FaBitbucket />}</Link>
            </Button>
        </div>
    )
}

export default Tags