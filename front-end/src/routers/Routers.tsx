import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/home/home"
import { Dashboard } from "../pages/dashboard/dashboard"

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}


