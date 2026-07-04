import { useState, useEffect } from 'react'
import { Button } from '../Button'
import { PlusIcon, ShareIcon, Inbox, Menu } from 'lucide-react'
import { Card } from '../Card'
import { CreateContentModal } from '../CreateContent'
import { SideBar } from '../SideBar'
import toast, {Toaster} from 'react-hot-toast'

interface  ArrType {
  _id: string
  link?: string,
  contnt?: string,
  type: "notes" | "youtube" | "twitter",
  title: string,
  createdAt?: Date
}

export function Dashboard() {
  const [modalOpen, setmodalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [Types, setTypes] = useState<string|null>("all")||null
  const [contArr, setcontArr] = useState<ArrType[]> ([])
  const [Share, setShare] = useState(false)
  const [MenuOpen, setMenuOpen] = useState(false)
  

    const t: string|null=localStorage.getItem("token");

  async function fetchCont() {
    const res=await fetch(`http://localhost:3000/api/v1/content?type=${Types}`,{
      headers:{
        'Authorization':`Bearer ${t}`,
        'Content-Type':'application/json'
      }
    })
    const data=await res.json()
    console.log(data.content)
    setcontArr(data.content)
  }

  useEffect(() => {
    fetchCont();
  }, [modalOpen || Types])


  async function shareBrain() {
    setShare((prev)=>!prev);
    const res=await fetch(`http://localhost:3000/api/v1/mind/`,{
      method:'POST',
      headers:{
        'Authorization':`Bearer ${t}`,
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        share:Share
      })
    })
    const data=await res.json();
    console.log(data.hash)
    
    if(!Share){
      toast("Stopped sharing",{
        icon:"⚠"
      })
    }
    else{
    try{
    const shareUrl=`https://localhost:5173/${data.hash}`

    await navigator.clipboard.writeText(shareUrl);

    toast.success("Link Copied!")
    }catch(e){
      toast.error("Error")
    }
  }
  }
  

  return (
    <div className={`min-h-screen font-sans antialiased selection:bg-indigo-500/10 transition-colors duration-300 ${darkMode ? 'bg-[#050505] text-slate-200' : 'bg-[#f8fafc] text-slate-800'}`}>

      <Toaster/>
      <SideBar MenuOpen={MenuOpen} setMenuOpen={setMenuOpen} setTypes={setTypes} darkMode={darkMode} setDarkMode={setDarkMode} />

      {MenuOpen && (
  <div
    className="fixed inset-0 bg-black/50 z-40 md:hidden"
    onClick={() => setMenuOpen(false)}
  />
)}
      
      {/* Main Interface Core Wrapper */}
      <div className='p-6 pt-10 md:p-12 ml-0 md:ml-76 transition-all duration-300'>
        
        {/* Symmetrical High-End Action Header Panel */}
        <header className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-8 mb-10 ${darkMode ? 'border-[#2c2c2c]' : 'border-[#caccce]'}`}>
          

          <div className="flex items-center gap-8">
  <button
    onClick={() => setMenuOpen(true)}
    className={`md:hidden p-2 rounded-xl border ${
      darkMode
        ? "border-[#2c2c2c] bg-[#121212]"
        : "border-slate-300 bg-slate-50"
    }`}
  >
    <Menu size={20} />
  </button>

  <div>
    <h1
      className={`text-2xl font-bold tracking-tight ${
        darkMode ? "text-white" : "text-slate-900"
      }`}
    >
      All Captured Memories
    </h1>
    <p className="text-xs text-slate-400 mt-1 font-medium tracking-wide">
      Your unified knowledge storage vector hub.
    </p>
  </div>
</div>


          <div className='flex items-center gap-3 self-end sm:self-auto'>
            <Button 
              onClick={shareBrain} 
              variant="secondary" 
              size='md' 
              text='Share Content' 
              startIcon={<ShareIcon size="1.5em"/>}
              darkMode={darkMode}
            />
            
            <Button 
              onClick={() => setmodalOpen(true)} 
              variant="primary" 
              size='md' 
              text='Add Content' 
              startIcon={<PlusIcon size="1.5em"/>}
              darkMode={darkMode}
            />
          </div>
        </header>

        <CreateContentModal open={modalOpen} onClose={() => setmodalOpen(false)} darkMode={darkMode} />


{contArr.length === 0 && (
  <div className={`flex flex-col items-center justify-center min-h-[50vh] ${darkMode? 'text-gray-600': 'text-black'}`}>
    <Inbox size={50} className="mb-3" />
    <p>No content to display</p>
  </div>
)}
        

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

          {contArr?.map((cont)=>(
            <div key={cont._id}>
            <Card
            onDelete={(id)=>
              setcontArr((prev)=>
                prev.filter((i)=>i._id!==id))}

             darkMode={darkMode} content={cont.contnt} contId={cont._id} id={cont.link} createdAt={cont.createdAt} title={cont.title} type={cont.type} link={
              cont.type==="youtube"?`https://www.youtube.com/embed/${cont.link}`:
              `https://x.com/i/status/${cont.link}:undefined`
            }/>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}