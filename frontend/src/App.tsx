
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Dashboard } from './Components/pages/Dashboard'
import Home from './Components/pages/Home'
import SignupPage from './Components/pages/Signup'
import SigninPage from './Components/pages/Signin'
import { SharedBrain } from './Components/pages/SharedBrain'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/content' element={<Dashboard/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/signin' element={<SigninPage/>}/>
      <Route path='/mind/:shareLink' element={<SharedBrain/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App