import { useState } from 'react'
import { Button } from './Components/ui/Button'
import { PlusIcon } from './icons/add'
import { ShareIcon } from './icons/share'

import './App.css'

function App() {

  return (
    <>
      <div className="d flex items-center justify-center">
        <Button variant="primary" size='lg' text='share the content' startIcon={<PlusIcon size={"lg"}/>} onClick={()=>{}}/>
          <Button variant="secondary" size='md' text='share the content' startIcon={<ShareIcon size={"md"}/>} onClick={()=>{}}/>
      </div>
    </>
  )
}

export default App
