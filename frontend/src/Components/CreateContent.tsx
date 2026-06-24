import { X } from "lucide-react";
import { Input } from "./Input";
import { Button } from "./Button";

export function CreateContentModal({ open, onClose }) {
  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-slate-900/40 fixed top-0 left-0 z-50 flex items-center justify-center p-4 backdrop-blur-xs transition-opacity">
          <div className="w-full max-w-sm bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden transform transition-all">
            
            {/* Modal Navigation Control Header */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-900"></span>
                    Quick Capture Memory
                </h3>
                <div onClick={onClose} className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                  <X size="1.05em"/>
                </div>
            </div>
            
            {/* Form Fields wrapper container */}
            <div className="p-5 space-y-4">
                <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Resource Type</label>
                    <Input placeholder={"e.g. youtube, twitter, notes"} onChange={() => {}}/>
                </div>
                <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">URL Anchor Link</label>
                    <Input placeholder={"https://example.com/resource"} onChange={() => {}}/>
                </div>
            </div>

            {/* Modal Controls Actions Toolbar */}
            <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex justify-end gap-2">
                <button type="button" onClick={onClose} className="px-4 py-1.5 text-xs font-semibold text-slate-400 hover:text-slate-800 transition-colors">
                  Cancel
                </button>
                <Button variant="primary" text="Submit Memory" size="md"/>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}