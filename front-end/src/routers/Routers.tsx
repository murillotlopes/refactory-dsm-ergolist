import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/home/home"

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}


