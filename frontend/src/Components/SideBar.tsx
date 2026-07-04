import { SidebarItem } from "./SidebarItems";
import {
  LayoutGridIcon,
  Sun,
  Moon,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { YoutubeIcon } from "./icons/Youtube";
import { TwitterIcon } from "./icons/Twitter";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export function SideBar({
  darkMode,
  setDarkMode,
  setTypes,
  MenuOpen,
  setMenuOpen
}: {
  darkMode: boolean;
  MenuOpen: boolean,
  setTypes: React.Dispatch<React.SetStateAction<string>>;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setDarkMode: (v: boolean) => void;
}) {
  const [Select, setSelect] = useState("all");
  const navigate=useNavigate()

return (
  <>
    <div
  className={`
    fixed px-5 pt-7 md:top-0 left-0 z-50
    h-screen w-72 md:w-76
    border-r flex flex-col
    transition-transform duration-300
    ${MenuOpen ? "translate-x-0" : "-translate-x-full"}
    md:translate-x-0
    ${
      darkMode
        ? "bg-[#050505] border-[#2c2c2c]"
        : "bg-white border-[#caccce]"
    }
  `}
>
      {/* Logo + Theme + Close */}
      <div
        className={`flex items-center justify-between pb-8 border-b ${
          darkMode ? "border-[#2c2c2c]" : "border-[#caccce]"
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`h-8 w-8 rounded-xl flex items-center justify-center text-md font-bold shadow-xs ${
              darkMode
                ? "bg-[#1a1a1a] text-white"
                : "bg-slate-900 text-white"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 10c-.74 0-1.38.4-1.72 1H13V9h4c.55 0 1-.45 1-1V5.72c.6-.35 1-.98 1-1.72 0-1.1-.9-2-2-2s-2 .9-2 2c0 .74.4 1.38 1 1.72V7h-3V5c0-1.65-1.35-3-3-3-1.3 0-2.41.83-2.83 2.01A3.51 3.51 0 0 0 4 7.5c0 .33.05.65.14.96C2.87 9.14 2 10.49 2 12c0 1.08.43 2.09 1.17 2.83-.11.38-.17.77-.17 1.17 0 1.96 1.41 3.59 3.31 3.93C6.86 21.16 8.11 22 9.5 22c1.93 0 3.5-1.57 3.5-3.5V17h3v1.28c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V16c0-.55-.45-1-1-1h-4v-2h5.28c.35.6.98 1 1.72 1 1.1 0 2-.9 2-2s-.9-2-2-2m-9 8.5c0 .83-.67 1.5-1.5 1.5-.71 0-1.33-.5-1.47-1.2l-.21-.8H7c-1.1 0-2-.9-2-2 0-.35.08-.68.25-.98l.46-.82-.78-.51C4.35 13.31 4 12.68 4 12c0-.98.72-1.82 1.68-1.97l1.69-.26-1.06-1.35c-.2-.26-.32-.59-.32-.92 0-.83.67-1.5 1.5-1.5.11 0 .21.01.31.03l1.19.17V4.99c0-.55.45-1 1-1s1 .45 1 1v13.5Z" />
            </svg>
          </div>

          <div>
            <span
              className={`text-md font-bold uppercase tracking-wider block ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              MindVault
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-xl transition-all border ${
              darkMode
                ? "bg-[#121212] border-[#222222] text-[#fbbf24]"
                : "bg-slate-50 border-slate-300 text-slate-500"
            }`}
          >
            {darkMode ? <Sun size="1.1em" /> : <Moon size="1.1em" />}
          </button>

          
</div>
</div>
      {/* Sidebar Content */}
      <div className="flex flex-col flex-1 w-full justify-between">
        <div className="flex flex-col gap-2">
          <span
            className={`px-2 text-[10px] font-bold uppercase tracking-widest block mb-2 mt-8 ${
              darkMode ? "text-[#666666]" : "text-slate-400"
            }`}
          >
            Workspaces
          </span>

          <div
            onClick={() => {
              setTypes("all");
              setSelect("all");

            }}
          >
            <SidebarItem
              active={Select === "all"}
              text="All Memories"
              icon={<LayoutGridIcon size="1.5em" />}
              darkMode={darkMode}
            />
          </div>

          <div
            onClick={() => {
              setTypes("twitter");
              setSelect("twitter");
            }}
          >
            <SidebarItem
              active={Select === "twitter"}
              text="Twitter Feed"
              icon={<TwitterIcon />}
              darkMode={darkMode}
            />
          </div>

          <div
            onClick={() => {
              setTypes("youtube");
              setSelect("youtube");
            }}
          >
            <SidebarItem
              active={Select === "youtube"}
              text="YouTube Sync"
              icon={<YoutubeIcon />}
              darkMode={darkMode}
            />
          </div>
        </div>

        <div
          onClick={() => {
            localStorage.removeItem("token");
            const toastId = toast.loading("Signing out");

            setTimeout(() => {
              navigate("/");
              toast.dismiss(toastId);
            }, 1000);
          }}
        >
          <SidebarItem
            text="Sign Out"
            icon={<LogOut size="1.5em" />}
            darkMode={darkMode}
          />
        </div>
      </div>
    </div>
  </>
);

}