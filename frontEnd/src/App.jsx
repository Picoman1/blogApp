import AddBlock from './Components/AddBlock.jsx'
import Home from './Components/Home.jsx'
import Login from './Components/Login.jsx'
import Signup from './Components/Signup.jsx'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import Main from './Components/Main.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'
function App() {
 

  return (
    <>
   
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/signup' element={<ProtectedRoute><Signup/></ProtectedRoute>}></Route>
        <Route path='/blogs' element={<ProtectedRoute><Main child={<Home/>}/></ProtectedRoute>}></Route>
        <Route path='/addblogs' element={<ProtectedRoute><Main child={<AddBlock/>}/></ProtectedRoute>}></Route>
        
      </Routes>
    </>
  )
}

export default App
