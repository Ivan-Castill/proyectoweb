import React from 'react'
import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import Home from './routes/home'
import EtiPersonalizadas from './routes/EtiPersonalizadas'
import Sellos from './componentes/Sellos/Sellos'
import Footer from './componentes/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import QuienesSomos from './componentes/QuienesSomos/QuienesSomos'
import Login from './componentes/Login/Login'
import CrudEtiquetas from './componentes/CrudEtiquetas/CrudEtiquetas'
function App() {
  return (
    <div>
    <NavBar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/etiquetas-personalizadas' element={<EtiPersonalizadas/ >}/>
        <Route path='/sellos' element={<Sellos />}/>
        <Route path='/quienes-somos' element={<QuienesSomos/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cruedetiquetas' element={<CrudEtiquetas/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}
export default App;