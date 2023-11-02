import { Route, Routes, useLocation } from 'react-router-dom'
import {Home} from './views/Home/Home'
import  BookApp  from './views/BookApp/BookApp'
import { Specialties } from './views/Specialties/Specialties'
import About from './views/About/About'
import Login from './views/Login/Login'
import SignIn from './views/SignIn/SignIn'
import { Nav } from './components/Nav/Nav'
import RegisterDoctor from './views/AdminDashboard/RegisterDoctor'

import './App.css'

function App() {
  
  const location = useLocation();

  return (
    <>
     {(location.pathname !== '/login' && location.pathname !== '/signin') && < Nav/>}
     
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path='/book' element={ <BookApp/> } />
        <Route path='/specialties' element={ <Specialties/> } />
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        {/* !# esta linea se debe arreglar luego para incluirla en el admin dasboard */}
        <Route path="/registerdoctor" element={<RegisterDoctor/>}/> 


      </Routes>
    </>
  )
}

export default App
