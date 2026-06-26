import { useState } from 'react'
import { Button } from '../Button'
import { PlusIcon, ShareIcon } from 'lucide-react'
import { Card } from '../Card'
import { CreateContentModal } from '../CreateContent'
import { SideBar } from '../SideBar'

export function Dashboard() {
  const [modalOpen, setmodalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen font-sans antialiased selection:bg-indigo-500/10 transition-colors duration-300 ${darkMode ? 'bg-[#050505] text-slate-200' : 'bg-[#f8fafc] text-slate-800'}`}>
      <SideBar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      {/* Main Interface Core Wrapper */}
      <div className='p-6 md:p-12 ml-0 md:ml-76 transition-all duration-300'>
        
        {/* Symmetrical High-End Action Header Panel */}
        <header className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-8 mb-10 ${darkMode ? 'border-[#2c2c2c]' : 'border-[#caccce]'}`}>
          <div>
            <h1 className={`text-2xl font-bold tracking-tight font-sans ${darkMode ? 'text-white' : 'text-slate-900'}`}>All Captured Memories</h1>
            <p className='text-xs text-slate-400 mt-1 font-medium tracking-wide'>Your unified knowledge storage vector hub.</p>
          </div>

          <div className='flex items-center gap-3 self-end sm:self-auto'>
            <Button 
              onClick={() => {}} 
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
        
        {/* Dribbble Style Symmetrical Cards Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <Card darkMode={darkMode} createdAt={new Date().toLocaleString()} title="Distributed System Consensus algorithms, Raft Explained" type='youtube' link='https://www.youtube.com/watch?v=KEs5UyBJ39g&themeRefresh=1'/>
          <Card darkMode={darkMode} createdAt={new Date().toLocaleString()} title="PostgreSQL indexing strategies under heavy read-write loads" type='youtube' link='https://www.youtube.com/watch?v=KEs5UyBJ39g&themeRefresh=1'/>
        </div>

      </div>
    </div>
  )
}