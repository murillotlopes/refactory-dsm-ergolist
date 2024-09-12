import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/home/home"
import { Dashboard } from "../pages/dashboard/dashboard"
import { Assessment } from "../pages/assessment/assessment"

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/new-assessment" element={<Assessment />} />
    </Routes>
  )
}


