import {Button} from "@/components/ui/button";
import { FaGithub} from "react-icons/fa"

const Tags = ({tags}) => {
    return (
        <div className='flex flex-wrap mt-5 gap-5 justify-between'>
            <div className="flex flex-wrap gap-4 items-end">
                {tags.map((tag, index) => {
                    return <p key={index} className='rounded-md border border-accent bg-transparent text-accent px-3'>{tag}</p>
                })}
            </div>
            <Button variant="outline" size="md" className="uppercase flex items-center gap-2 px-5 py-2">
                <span>View on Github</span>
                <FaGithub />
            </Button>
        </div>
    )
}

export default Tags