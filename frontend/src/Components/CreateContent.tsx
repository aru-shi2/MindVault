import { X } from "lucide-react";
import { Input } from "./Input";
import { Button } from "./Button";
import { useState } from "react";
import { string } from "zod";

export function CreateContentModal({ open, onClose, darkMode }) {

  const [Type, setType] = useState<string>("")
  const [Url, setUrl] = useState<string>("")
  const [Title, setTitle] = useState<string>("")

  function getYtId(Url: string){
    const u=new URL(Url);
    return u.searchParams.get("v");
  }

  function getTweetId(Url: string){
    const u=new URL(Url);
    const parts= u.pathname.split("/");
    const statusInd=parts.indexOf("status");
    return parts[statusInd+1];
  }

  const handleClick=async() => {
    try{
    const res=await fetch("http://localhost:3000/api/v1/content/add",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        type:Type,
        link:Type==="youtube"?getYtId(Url):
        Type==="twitter"?getTweetId(Url): "",
        title: Title
      }),
    });
    const data=await res.json();
    console.log(data.msg)
  }catch(e){
    console.log(e)
  }
  }


  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-[#000000]/70 fixed top-0 left-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity">
          <div className={`w-full max-w-sm border rounded-2xl shadow-xl overflow-hidden transform transition-all ${darkMode ? 'bg-[#0c0c0c] border-[#1c1c1c]' : 'bg-white border-slate-200'}`}>
            
            {/* Modal Navigation Control Header */}
            <div className={`p-4 border-b flex items-center justify-between ${darkMode ? 'bg-[#080808]/50 border-[#1c1c1c]' : 'bg-slate-50/50 border-slate-100'}`}>
                <h3 className={`text-xs font-bold uppercase tracking-wider flex items-center gap-2 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${darkMode ? 'bg-[#ffffff]' : 'bg-slate-900'}`}></span>
                    Quick Capture Memory
                </h3>
                <div onClick={onClose} className={`p-1.5 rounded-lg transition-colors cursor-pointer ${darkMode ? 'text-[#525252] hover:text-[#e5e7eb] hover:bg-[#141414]' : 'text-slate-400 hover:text-slate-700 hover:bg-slate-50'}`}>
                  <X size="1.05em"/>
                </div>
            </div>
            
            {/* Form Fields wrapper container */}
            <div className="p-5 space-y-4">
                <div className="space-y-1.5">
                    <label className={`text-[10px] font-bold uppercase tracking-wider block ${darkMode ? 'text-[#525252]' : 'text-slate-400'}`}>Resource Type</label>
                    <Input value={Type} placeholder={"e.g. youtube, twitter, notes"} valueChange={setType} darkMode={darkMode}/>
                </div>
                <div className="space-y-1.5">
                    <label className={`text-[10px] font-bold uppercase tracking-wider block ${darkMode ? 'text-[#525252]' : 'text-slate-400'}`}>URL Anchor Link</label>
                    <Input value={Url} placeholder={"https://example.com/resource"} valueChange={setUrl} darkMode={darkMode}/>
                </div>
                <div className="space-y-1.5">
                    <label className={`text-[10px] font-bold uppercase tracking-wider block ${darkMode ? 'text-[#525252]' : 'text-slate-400'}`}>Title</label>
                    <Input value={Title} placeholder={"e.g. first video, first tweet"} valueChange={setTitle} darkMode={darkMode}/>
                </div>
            </div>

            {/* Modal Controls Actions Toolbar */}
            <div className={`p-4 border-t flex justify-end gap-2 ${darkMode ? 'bg-[#080808]/50 border-[#1c1c1c]' : 'bg-slate-50/50 border-slate-100'}`}>
                <button type="button" onClick={onClose} className={`px-4 py-1.5 text-xs font-semibold transition-colors ${darkMode ? 'text-[#525252] hover:text-[#e5e7eb]' : 'text-slate-400 hover:text-slate-800'}`}>
                  Cancel
                </button>
                <Button onClick={handleClick} variant="primary" text="Submit Memory" size="md" darkMode={darkMode}/>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}