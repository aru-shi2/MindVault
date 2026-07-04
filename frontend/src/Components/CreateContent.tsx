import { X } from "lucide-react";
import { Input } from "./Input";
import { Button } from "./Button";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from "react";

export function CreateContentModal({ open, onClose, darkMode}:{
  open: boolean,
  onClose:()=>void,
  darkMode: boolean
}) {

  const [Type, setType] = useState<string>("")
  const [Url, setUrl] = useState<string>("")
  const [Title, setTitle] = useState<string>("")
  const [Content, setContent] = useState<string>("")

  // Available fixed options
  const predefinedOptions = ["youtube", "twitter", "notes"];

  function getYtId(Url: string) {
    try {
      const u = new URL(Url);
      return u.searchParams.get("v") || "";
    } catch (e) {
      return "";
    }
  }

  function getTweetId(Url: string) {
    try {
      const u = new URL(Url);
      const parts = u.pathname.split("/");
      const statusInd = parts.indexOf("status");
      return parts[statusInd + 1] || "";
    } catch (e) {
      return "";
    }
  }

  useEffect(() => {
    if (open) {
      setTitle("")
      setUrl("")
      setType("")
      setContent("")
    }
  }, [open])

  const t: string | null = localStorage.getItem("token");

  const handleClick = async () => {
    if (!Type) {
      toast.error("Please select a resource type");
      return;
    }

    try {
      const res = await fetch("https://mindvault-e8oq.onrender.com/api/v1/content/add", {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${t}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          type: Type,
          link: Type === "youtube" ? getYtId(Url) :
                Type === "twitter" ? getTweetId(Url) : undefined,
          contnt: Type==="notes"?Content:undefined,
          title: Title || Type // Defaults to the type name if title is empty
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.msg)
      } else {
        toast.success(data.msg);
        setTimeout(() => {
          onClose()
        }, 1000);
      }
    } catch (e) {
      toast.error("Something went wrong!")
    }
  }

  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-[#000000]/70 fixed top-0 left-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity">
          <div className={`w-full max-w-sm border rounded-2xl shadow-xl overflow-hidden transform transition-all ${darkMode ? 'bg-[#0c0c0c] border-[#1c1c1c]' : 'bg-white border-slate-200'}`}>
            <Toaster />

            {/* Modal Navigation Control Header */}
            <div className={`p-4 border-b flex items-center justify-between ${darkMode ? 'bg-[#080808]/50 border-[#1c1c1c]' : 'bg-slate-50/50 border-slate-100'}`}>
              <h3 className={`text-xs font-bold uppercase tracking-wider flex items-center gap-2 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${darkMode ? 'bg-[#ffffff]' : 'bg-slate-900'}`}></span>
                Quick Capture Memory
              </h3>
              <div onClick={onClose} className={`p-1.5 rounded-lg transition-colors cursor-pointer ${darkMode ? 'text-[#525252] hover:text-[#e5e7eb] hover:bg-[#141414]' : 'text-slate-400 hover:text-slate-700 hover:bg-slate-50'}`}>
                <X size="1.05em" />
              </div>
            </div>

            {/* Form Fields wrapper container */}
            <div className="p-5 space-y-4">
              
              {/* Interactive Tag/Button Selection */}
              <div className="space-y-2">
                <label className={`text-[10px] font-bold uppercase tracking-wider block ${darkMode ? 'text-[#525252]' : 'text-slate-400'}`}>
                  Resource Type
                </label>
                <div className="flex gap-2">
                  {predefinedOptions.map((option) => {
                    const isSelected = Type === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => {
                          setType(option);
                        }}
                        className={`flex-1 py-2 px-3 text-xs font-medium rounded-xl border transition-all duration-200 capitalize ${
                          isSelected
                            ? darkMode
                              ? 'bg-white text-black border-white shadow-md shadow-white/5'
                              : 'bg-slate-900 text-white border-slate-900 shadow-md shadow-slate-900/10'
                            : darkMode
                              ? 'bg-[#121212] text-[#a3a3a3] border-[#262626] hover:bg-[#1c1c1c] hover:text-white'
                              : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className={`text-[10px] font-bold uppercase tracking-wider block ${darkMode ? 'text-[#525252]' : 'text-slate-400'}`}>{Type==="notes"?"Content":"Url"}</label>
                <Input value={Type==="notes"?Content:Url} placeholder={Type=="notes"?"Enter Content here":"https://example.com/resource"} valueChange={Type==="notes"?setContent:setUrl} darkMode={darkMode} />
              </div>
              
              <div className="space-y-1.5">
                <label className={`text-[10px] font-bold uppercase tracking-wider block ${darkMode ? 'text-[#525252]' : 'text-slate-400'}`}>Title</label>
                <Input value={Title} placeholder={"e.g. My Favorite Video"} valueChange={setTitle} darkMode={darkMode} />
              </div>
            </div>

            {/* Modal Controls Actions Toolbar */}
            <div className={`p-4 border-t flex justify-end gap-2 ${darkMode ? 'bg-[#080808]/50 border-[#1c1c1c]' : 'bg-slate-50/50 border-slate-100'}`}>
              <button type="button" onClick={onClose} className={`px-4 py-1.5 text-xs font-semibold transition-colors ${darkMode ? 'text-[#525252] hover:text-[#e5e7eb]' : 'text-slate-400 hover:text-slate-800'}`}>
                Cancel
              </button>
              <Button onClick={handleClick} variant="primary" text="Submit Memory" size="md" darkMode={darkMode} />
            </div>

          </div>
        </div>
      )}
    </div>
  );
}