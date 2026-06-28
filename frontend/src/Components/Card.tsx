import { ExternalLinkIcon, Trash2Icon, FileTextIcon, LinkIcon } from "lucide-react"
import { Button } from "./Button"
import { YoutubeIcon } from "./icons/Youtube";
import { TwitterIcon } from "./icons/Twitter";
import { formatDistanceToNow } from "date-fns"

interface CardProps {
    title: string,
    link: string,
    type: "notes" | "youtube" | "blog" | "twitter",
    createdAt: string,
    darkMode?: boolean
}


export const Card = ({ title, link, type, createdAt, darkMode }: CardProps) => {
    
    const iconMap = {
        youtube: <YoutubeIcon  />,
        twitter: <TwitterIcon  />,
        blog: <LinkIcon size="1em" className="text-emerald-500" />,
        notes: <FileTextIcon size="1em" className="text-indigo-500" />
    };

    return (
        <div className={`w-full rounded-2xl p-5 border transition-all duration-300 shadow-xs flex flex-col justify-between space-y-5 group ${darkMode ? 'bg-[#0d0d0d] border-[#181818] hover:border-[#2c2c2c]' : 'bg-white border-gray-300 hover:border-[#918f8f]'}`}>
            
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                        <div className={`p-2 border rounded-xl ${darkMode ? 'bg-[#141414] border-[#1f1f1f]' : 'bg-slate-50 border-slate-100'}`}>
                            {iconMap[type] || <FileTextIcon size="1em" />}
                        </div>
                        <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-slate-400">
                            {type}
                        </span>
                    </div>
                    
                    <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-all duration-200">
                        <a href={link} target="_blank" rel="noreferrer" className={`p-1.5 rounded-lg transition-all ${darkMode ? 'text-[#525252] hover:text-[#ffffff] hover:bg-[#141414]' : 'text-slate-400 hover:text-slate-800 hover:bg-slate-50'}`}>
                            <ExternalLinkIcon size="0.9em" />
                        </a>
                        <button className={`p-1.5 rounded-lg transition-all ${darkMode ? 'text-[#525252] hover:text-[#f87171] hover:bg-[#141414]' : 'text-slate-400 hover:text-red-500 hover:bg-slate-50'}`}>
                            <Trash2Icon size="0.9em" />
                        </button>
                    </div>
                </div>

                <h2 className={`text-sm font-semibold leading-snug tracking-tight transition-colors ${darkMode ? 'text-[#f3f4f6] group-hover:text-[#ffffff]' : 'text-slate-800 group-hover:text-slate-950'}`}>
                    {title}
                </h2>
            </div>

            {/* Embedded Asset Slot Box */}
            <div className={`max-h-150 max-w-100 rounded-xl border ${darkMode ? 'border-[#141414] bg-[#070707]' : 'border-slate-100 bg-slate-50'}`}>
                {type === "youtube" && (
                    <div className="relative aspect-video w-full">
                        <iframe 
                            className="w-full h-full" 
                            src={link} 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                        ></iframe>
                    </div>
                )}

                {type === "twitter" && (
                    <div className="p-1 max-h-55 overflow-y-auto">
                        <blockquote className="twitter-tweet">
                            <a href={link}></a>
                        </blockquote>
                    </div>
                )}

                {type === "blog" && (
                    <div className="p-3.5 text-xs text-slate-500 flex items-center justify-between">
                        <span className="truncate max-w-[75%] font-mono text-[10px] tracking-tight">{link}</span>
                        <a href={link} target="_blank" rel="noreferrer" className={`hover:underline font-bold shrink-0 ${darkMode ? 'text-[#ffffff]' : 'text-slate-900'}`}>Read ↗</a>
                    </div>
                )}
            </div>
                
            <div className={`pt-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t ${darkMode ? 'border-[#181818]' : 'border-slate-100'}`}>
                <div className="btm">
                    <Button variant="tags" size="sm" text={type} startIcon="#" darkMode={darkMode}/>
                </div>

                {/* <span className={`text-[10px] font-mono font-medium self-end sm:self-auto ${darkMode ? 'text-[#525252]' : 'text-slate-400'}`}>
                    {createdAt&&formatDistanceToNow(new Date(createdAt), {
                        addSuffix: true,
                    })}
                </span> */}
            </div>
        </div>
    )
}