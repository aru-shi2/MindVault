import { useState } from 'react'
import { Button } from './Components/Button'
import { PlusIcon, ShareIcon } from 'lucide-react'
import { Card } from './Components/Card'
import { CreateContentModal } from './Components/CreateContent'
import { SideBar } from './Components/SideBar'

function App() {
  const [modalOpen, setmodalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased selection:bg-indigo-500/10">
      <SideBar />
      
      {/* Main Interface Core Wrapper */}
      <div className='p-6 md:p-12 ml-0 md:ml-76 transition-all duration-300'>
        
        {/* Symmetrical High-End Action Header Panel */}
        <header className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-8 mb-10'>
          <div>
            <h1 className='text-2xl font-bold tracking-tight text-slate-900 font-sans'>All Captured Memories</h1>
            <p className='text-xs text-slate-400 mt-1 font-medium tracking-wide'>Your unified knowledge storage vector hub.</p>
          </div>

          <div className='flex items-center gap-3 self-end sm:self-auto'>
            <Button 
              onClick={() => {}} 
              variant="secondary" 
              size='md' 
              text='Share Content' 
              startIcon={<ShareIcon size="1em"/>}
            />
            
            <Button 
              onClick={() => setmodalOpen(true)} 
              variant="primary" 
              size='md' 
              text='Add Content' 
              startIcon={<PlusIcon size="1em"/>}
            />
          </div>
        </header>

        <CreateContentModal open={modalOpen} onClose={() => setmodalOpen(false)} />
        
        {/* Dribbble Style Symmetrical Cards Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <Card createdAt={new Date().toLocaleString()} title="Distributed System Consensus algorithms, Raft Explained" type='youtube' link='https://www.youtube.com/watch?v=KEs5UyBJ39g&themeRefresh=1'/>
          <Card createdAt={new Date().toLocaleString()} title="PostgreSQL indexing strategies under heavy read-write loads" type='youtube' link='https://www.youtube.com/watch?v=KEs5UyBJ39g&themeRefresh=1'/>
        </div>

      </div>
    </div>
  )
}

export default App