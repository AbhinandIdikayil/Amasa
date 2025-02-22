import { useState } from 'react'
import EventDetails from './components/EventDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <EventDetails />
  )
}

export default App
