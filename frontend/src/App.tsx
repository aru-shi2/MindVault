import { useState } from 'react'
import { Button } from './Components/Button'
import { PlusIcon, ShareIcon } from 'lucide-react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Dashboard } from './Components/pages/Dashboard'
import SignupPage from './Components/pages/Signup'
import SigninPage from './Components/pages/Signin'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/signin' element={<SigninPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App