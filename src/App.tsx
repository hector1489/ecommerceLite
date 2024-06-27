import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css'
import { NavBar } from "./components"
import Home from "./views/Home/Home"

function App() {


  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
