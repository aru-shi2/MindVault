import {
  ExternalLinkIcon,
  Trash2Icon,
  FileTextIcon,
} from "lucide-react";
import { Button } from "./Button";
import { YoutubeIcon } from "./icons/Youtube";
import { TwitterIcon } from "./icons/Twitter";
import { formatDistanceToNow } from "date-fns";
import { useEffect } from "react";
import toast from "react-hot-toast";

interface CardProps {
  id: string|undefined;
  title: string;
  link?: string;
  content?: string;
  type: "youtube" | "notes" | "twitter";
  createdAt: Date|undefined;
  darkMode?: boolean;
  contId: string;
  onDelete: (id: string) => void;
}

export const Card = ({
  content,
  contId,
  id,
  title,
  link,
  type,
  createdAt,
  darkMode,
  onDelete,
}: CardProps) => {
  const iconMap = {
    youtube: <YoutubeIcon />,
    twitter: <TwitterIcon />,
    notes: <FileTextIcon size="1em" />,
  };


  useEffect(() => {
    (window as any).twttr?.widgets.load();
  }, [link]);

  const openLink = () => {
    if (type === "youtube") {
      window.open(`https://www.youtube.com/watch?v=${id}`);
    } else if (type === "twitter") {
      window.open(link);
    }
  };

  const t: string | null = localStorage.getItem("token");

  const delContent = async () => {
    try {
      const res = await fetch(
        `https://mindvault-e8oq.onrender.com/api/v1/content/delete/${contId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${t}`,
            "Content-Type": "application/json",
          },
        },
      );
      const data = await res.json();

      onDelete(contId);
      toast.success(data.msg);
    } catch (e) {
      toast.error("Failed to delete");
    }
  };

  const hasMedia = type === "youtube" || type === "twitter" || type==="notes";

  return (
    <div
      className={`w-full shadow-gray-300/30 rounded-2xl p-3.5 border transition-all duration-300 shadow-xs flex flex-col justify-between group ${darkMode ? "bg-[#0d0d0d] border-[#181818] hover:border-[#2c2c2c]" : "shadow-gray-400 bg-white border-gray-300 hover:border-[#999999]"}`}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className={`p-1.5 border rounded-xl ${darkMode ? "bg-[#141414] border-[#1f1f1f]" : "bg-slate-50 border-slate-100"}`}
            >
              {iconMap[type] || <FileTextIcon size="1em" />}
            </div>
            <span className="text-[9px] uppercase font-mono tracking-widest font-bold text-slate-400">
              {type}
            </span>
          </div>

          <div className="flex items-center gap-0.5 transition-all duration-200">
            {type!=="notes"&&<button
              onClick={openLink}
              className={`p-1 rounded-lg transition-all ${darkMode ? "text-[#525252] hover:text-[#ffffff] hover:bg-[#141414]" : "text-slate-400 hover:text-slate-800 hover:bg-slate-50"}`}
            >
              <ExternalLinkIcon size="0.85em" />
            </button>}
            <button
              onClick={delContent}
              className={`p-1 rounded-lg transition-all ${darkMode ? "text-[#525252] hover:text-[#f87171] hover:bg-[#141414]" : "text-slate-400 hover:text-red-500 hover:bg-slate-50"}`}
            >
              <Trash2Icon size="0.85em" />
            </button>
          </div>
        </div>

        <h2
          className={`text-md font-semibold leading-snug tracking-tight transition-colors ${darkMode ? "text-[#f3f4f6] group-hover:text-[#ffffff]" : "text-slate-800 group-hover:text-slate-950"}`}
        >
          {title}
        </h2>
      </div>

      {/* Embedded Asset Slot Box - Only rendered when media exists to avoid unwanted vertical spacing */}
      {hasMedia && (
       <div className={`mt-4 rounded-xl overflow-hidden border ${darkMode ? 'border-[#141414] bg-[#070707]' : 'border-slate-100 bg-slate-50'}`}>
{type === "youtube" && (
                        <div className="relative aspect-video w-full flex justify-center">
                          <iframe height="217" src={link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    )}

  {type === "twitter" && (
    <div className="max-h-54 w-full overflow-y-auto scrollbar-none">
      <blockquote className="twitter-tweet">
        <a href={link}></a>
      </blockquote>
    </div>
  )}

  {type === "notes" && (
    <div  className="p-4">
      <p
        className={`h-48 text-sm leading-7 whitespace-pre-wrap wrap-break-words ${
          darkMode ? "text-slate-300" : "text-slate-700"
        }`}
      >
        {content}
      </p>
    </div>
  )}
</div>
      )}

      <div
        className={`mt-2.5 pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-t ${darkMode ? "border-[#181818]" : "border-slate-100"}`}
      >
        <div className="flex">
          <Button
            variant="tags"
            size="sm"
            text={type}
            startIcon="#"
            darkMode={darkMode}
          />
        </div>

        <span
          className={`text-[9px] text-s font-medium self-end sm:self-auto ${darkMode ? "text-[#525252]" : "text-slate-400"}`}
        >
          {createdAt &&
            formatDistanceToNow(new Date(createdAt), {
              addSuffix: true,
            })}
        </span>
      </div>
    </div>
  );
};
