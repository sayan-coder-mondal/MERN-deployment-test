import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GetData from './components/GetData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GetData/>
    </>
  )
}

export default App
