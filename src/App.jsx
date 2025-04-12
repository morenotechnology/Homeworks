import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import Registro from './Registro'
import Login from './Login'
import { useSelector } from 'react-redux'
import Home from './Home'
import { Crud } from './Crud'
import DataComponent from './DataComponent'
import RealTimeMessages from "./RealTimeMessages"
import Dashboard from './Dashboard'

function App() {
  const { stats } = useSelector((state) => state.auth);
  return (
    <Routes>
      <Route path="/Registro" element={<Registro/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Home" element={
        stats === "authenticated" ? <Home/> : <Navigate to="/Login"/>}></Route>
      <Route path="/Crud" element={<Crud/>}></Route>
      <Route path="/DataComponent" element={<DataComponent/>}></Route>
      <Route path="/RealTimeMessages" element={<RealTimeMessages/>}></Route>
      <Route path="/" element={<Dashboard/>}></Route>
      <Route path="/Dashboard" element={<Dashboard/>}></Route>
    </Routes>
  )
}

export default App
