import { BrowserRouter, Route, Routes } from "react-router-dom"

import Topic from "./Topic"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Contato from "./pages/Contato"
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
      {/* <Topic

      cor="red"/>
      <Topic
      cor="blue"/>
      <Topic
      cor="purple"/>
      <Topic
      cor="orange"/> */}
    </div>
  )
}