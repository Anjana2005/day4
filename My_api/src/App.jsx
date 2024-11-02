import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import UserTable from './components/UserTable'
import IdTable from './components/IdTable'
import { Route, Routes } from 'react-router-dom'
import Listmap from './components/Listmap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/u' element={<UserTable/>}></Route>
        <Route path='/i' element={<IdTable/>}></Route>
        <Route path='/l' element={<Listmap/>}></Route>
      </Routes>
      
    </>
  )
}

export default App
