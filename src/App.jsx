import { useState } from 'react'
import {RiMenu3Line} from './assets/Icons.jsx'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar.jsx'

function App() {
  const [shwslide, setshwslide] = useState(false)

  return (
    <>
  <Navbar shwslide={shwslide} setshwslide={setshwslide}/>
  <Sidebar shwslide={shwslide} setshwslide={setshwslide}/>
    </>
  )
}

export default App
