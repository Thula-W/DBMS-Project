
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepg from './pages/Homepg'
import Orders from './coo/Orders'

import Trucks from './coo/Trucks'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route index element={<Homepg/>}/>
        <Route path='cooSign' element={<Orders/>}/>
        {<Route path='adminSign' element={<Trucks/>}/> /* testing trucks is not part of admin sing */}
      </Route>
    </Routes>



  )
}
