import MainLayout from "@/layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"


const BaseRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default BaseRouter