import { useState } from 'react'
import { Button } from './Components/Button'
import { PlusIcon } from './icons/add'
import { ShareIcon } from './icons/share'
import { Card } from './Components/Card'

function App() {

  return (
    <>
      <div className="flex justify-center items-center">
        {/* <Button variant="primary" size='lg' text='share the content' startIcon={<PlusIcon size={"lg"}/>} onClick={()=>{}}/>
          <Button variant="secondary" size='md' text='share the content' startIcon={<ShareIcon size={"md"}/>} onClick={()=>{}}/> */}

          <div className='flex gap-10'>
            <Card createdAt={new Date().toLocaleString()} title="abcd" type='youtube' link='https://www.youtube.com/watch?v=KEs5UyBJ39g&themeRefresh=1'/>

          <Card createdAt={new Date().toLocaleString()} title="abcd" type='youtube' link='https://www.youtube.com/watch?v=KEs5UyBJ39g&themeRefresh=1'/>

          <Card createdAt={new Date().toLocaleString()} title="abcd" type='youtube' link='https://www.youtube.com/watch?v=KEs5UyBJ39g&themeRefresh=1'/>
          </div>
      </div>
    </>
  )
}

export default App
