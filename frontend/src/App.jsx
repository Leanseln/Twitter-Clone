import { useState } from "react"
import HomePage from "./pages/HomePage"
import Dashboard from "./pages/logusers/Dashboard"

function App() {
  const [user,setUser] = useState(null)

  return (
    <div className="App">
      {user ? <Dashboard/> : <HomePage/>}
    </div>
  )
}

export default App
