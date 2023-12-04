import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@/styles/global.scss'

import { HashRouter, Routes, Route } from 'react-router-dom'
import Login from "@/views/login/index.tsx";
import Home from "@/views/Home/index.tsx";
import User from "@/views/User/index.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/login' element={<Login></Login>}>
          <Route index element={<Home></Home>}></Route>
          <Route path='User' element={<User></User>}></Route>
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
