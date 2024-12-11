import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Headline from './components/Headline'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Headline/>
      <Button/><Button/>
      <Gallery/>
    </div>
  )
}

export default App
