import { useState } from 'react'
import {RiMenu3Line} from './assets/Icons.jsx'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Navbar/>
    </>
  )
}

export default App
