import { useState } from 'react'
import {RiMenu3Line} from './assets/Icons.jsx'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar.jsx'
import Card from './components/Card.jsx'


function App() {
  const [shwslide, setshwslide] = useState(false)

  // Free Delivery Open Popup 

  const [openpup, setopenpup] = useState(false)

  // Free Delivery input popup 
  const [freepop, setfreepop] = useState(false)

  return (
    <>
  <Navbar shwslide={shwslide} setshwslide={setshwslide} freepop={freepop} setfreepop={setfreepop} openpup={openpup} setopenpup={setopenpup}/>
  <Sidebar shwslide={shwslide} setshwslide={setshwslide}/>
  <Card/>
    </>
  )
}

export default App
