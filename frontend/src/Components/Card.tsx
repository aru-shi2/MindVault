
import { ShareIcon } from "../icons/share"
import { Button } from "./Button"
import {formatDistanceToNow} from "date-fns"

interface CardProps {
    title: string,
    link: string,
    type: "notes" | "youtube" | "blog" | "twitter",
    createdAt: string
}

export const Card=({title, link, type, createdAt}: CardProps)=>{
    return <div className="size-auto bg-white rounded-md p-4 max-w-72 border-2 border-gray-200 space-y-3">
        <div className="flex justify-between">
            <div className="flex items-center">
                <div className="pr-2">
                    <ShareIcon size="md"/>
                </div>
                <h2>{title}</h2>
            </div>
    
            <div className="flex items-center">
                <div className="text-gray-500 pr-2"><ShareIcon size="md"/></div>   
                <div className="text-gray-500"><ShareIcon size="md"/></div>
            </div>
        </div>

        <div>
            {type==="youtube" && <iframe className="w-full" src={link.replace("watch","embed").replace("?v=","/")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}

            {type==="twitter" && <blockquote className="twitter-tweet">
                 <a href={link}></a>
                 </blockquote>}

            {type==="blog" && (
                <a href={link} target="_blank"></a>
            )}
        </div>
            
        <div className="btm">
            <Button variant="tags" size="sm" text="string" startIcon="#"/>
        </div>

        <div>
            <span>
                {formatDistanceToNow(new Date(createdAt),{
                    addSuffix: true,
                })}
            </span>
        </div>
    </div>
}