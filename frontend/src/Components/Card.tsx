import { ExternalLinkIcon, Trash2Icon, FileTextIcon, LinkIcon } from "lucide-react"
import { Button } from "./Button"
import { YoutubeIcon } from "./Youtube";
import { TwitterIcon } from "./Twitter";
import { formatDistanceToNow } from "date-fns"

interface CardProps {
    title: string,
    link: string,
    type: "notes" | "youtube" | "blog" | "twitter",
    createdAt: string
}

export const Card = ({ title, link, type, createdAt }: CardProps) => {
    
    const iconMap = {
        youtube: <YoutubeIcon  />,
        twitter: <TwitterIcon  />,
        blog: <LinkIcon size="1em" className="text-emerald-500" />,
        notes: <FileTextIcon size="1em" className="text-indigo-500" />
    };

    return (
        <div className="w-full bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-slate-400/60 transition-all duration-300 shadow-xs flex flex-col justify-between space-y-5 group">
            
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                        <div className="p-2 bg-slate-50 border border-slate-100 rounded-xl">
                            {iconMap[type] || <FileTextIcon size="1em" />}
                        </div>
                        <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-slate-400">
                            {type}
                        </span>
                    </div>
                    
                    <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-all duration-200">
                        <a href={link} target="_blank" rel="noreferrer" className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-50 transition-all">
                            <ExternalLinkIcon size="0.9em" />
                        </a>
                        <button className="p-1.5 text-slate-400 hover:text-red-500 rounded-lg hover:bg-slate-50 transition-all">
                            <Trash2Icon size="0.9em" />
                        </button>
                    </div>
                </div>

                <h2 className="text-sm font-semibold text-slate-800 leading-snug tracking-tight group-hover:text-slate-950 transition-colors">
                    {title}
                </h2>
            </div>

            {/* Embedded Asset Slot Box (Solid Light Fill) */}
            <div className="overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
                {type === "youtube" && (
                    <div className="relative aspect-video w-full">
                        <iframe 
                            className="w-full h-full" 
                            src={link.replace("watch?v=", "embed/").replace("watch", "embed")} 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                        ></iframe>
                    </div>
                )}

                {type === "twitter" && (
                    <div className="p-1 max-h-48 overflow-y-auto">
                        <blockquote className="twitter-tweet">
                            <a href={link}></a>
                        </blockquote>
                    </div>
                )}

                {type === "blog" && (
                    <div className="p-3.5 text-xs text-slate-500 flex items-center justify-between">
                        <span className="truncate max-w-[75%] font-mono text-[10px] tracking-tight">{link}</span>
                        <a href={link} target="_blank" rel="noreferrer" className="text-slate-900 hover:underline font-bold shrink-0">Read ↗</a>
                    </div>
                )}
            </div>
                
            <div className="pt-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-slate-100">
                <div className="btm">
                    <Button variant="tags" size="sm" text={type} startIcon="#"/>
                </div>

                <span className="text-[10px] font-mono font-medium text-slate-400 self-end sm:self-auto">
                    {formatDistanceToNow(new Date(createdAt), {
                        addSuffix: true,
                    })}
                </span>
            </div>
        </div>
    )
}